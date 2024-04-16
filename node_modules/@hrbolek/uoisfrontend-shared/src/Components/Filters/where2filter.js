const reduce_or = (filters) => (item) => {
    console.log("reduce_or", filters, item)
    for(const f of filters) {
        if (f(item)) {
            return true
        }
    }
    return false
}

const reduce_and = (filters) => (item) => {
    for(const f of filters) {
        if (!f(item)) {
            return false
        }
    }
    return true
}

const reduce_eq = (name, value) => (item) => {
    console.log("reduce_eq", name, value, item)
    return item[name] === value
}

const reduce_lt = (name, value) => (item) => {
    return item[name] < value
}

const reduce_le = (name, value) => (item) => {
    return item[name] <= value
}

const reduce_gt = (name, value) => (item) => {
    return item[name] > value
}

const reduce_ge = (name, value) => (item) => {
    return item[name] >= value
}

const reduce_like = (name, value) => {
    let valuewopercentage = value.replaceAll("%", "")
    const result = (item) => {
        return `${item[name]}`.includes(valuewopercentage)
    }
    return result
}

const reduce_ilike = (name, value) => {
    let valuewopercentage = value.replaceAll("%", "")
    const result = (item) => {
        return `${item[name]}`.toLowerCase().includes(valuewopercentage)
    }
    return result
}

const reduce_in = (name, values) => (item) => {
    return values.some(i => item === i)
}

const reduce_startswith = (name, value) => (item) => {
    return `${item[name]}`.startsWith(value)
}

const createLogicFilter = (arr, reducer) => {
    const filters = arr.map(item => where2filter(item))
    const reduced = reducer(filters)
    return reduced
}

// where: {
//     _or: [
//       {name: {_like: "%John%"}}
//     ]
//   }

const createItemFilter = (name, opDef) => {
    //       {name: {_like: "%John%"}}
    const filtermap = {
        _eq: reduce_eq,
        _like: reduce_like,
        _ilike: reduce_ilike,
        _lt: reduce_lt,
        _le: reduce_le,
        _gt: reduce_gt,
        _ge: reduce_ge,
        _in: reduce_in,
        _startswith: reduce_startswith
    }
    const keys = Object.keys(opDef)
    if (keys.length !== 1) {
        throw Error(`${opDef} must have exactly one key`)
    }
    const key = keys[0]
    const value = opDef[key]
    console.log("createItemFilter", name, key, value)
    return filtermap[key](name, value)
}

export const where2filter = (where) => {
    // console.log("where2filter", where)
    const keys = Object.keys(where)
    if (keys.length !== 1) {
        throw Error(`where filter (${where}) must have exactly one key`)
    }
    let resultFilter = () => false
    const key = keys[0]
    if (key === "_or") {
        resultFilter = createLogicFilter(where[key], reduce_or)
    } else {
        if (key === "_and") {
            resultFilter = createLogicFilter(where[key], reduce_and)
        } else {
            resultFilter = createItemFilter(key, where[key])
        }
    }
    return resultFilter
}