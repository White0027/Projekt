
/**
 * 
 * @param {Object} filters Just formal attribute to have a "state" function
 * @param {Object} whereFilter This is filter defined by GraphQL but it must follow some conditions, 
 * _and can be only on top level, 
 * _or can be only under _and, 
 * elsewhere can be only names with operators and values
 * @function
 * @returns 
 */
const loadFilters = (filters, whereFilter) => {
    let validFilter = true
    let result = whereFilter
    let {_and} = result
    if (!_and) {
        console.error("loadFilters.filter has not _and", whereFilter)
        _and = []
        result = {_and: []}
    }
    const reducedFilters = {}
    // provest redukci
    // console.log("reduce _and", _and)
    for(const item of _and) {
        // console.log("_and.item", item)
        /**
         * {name: {_eq: "A"}}
         * {_or: [{name: {_eq: "A"}}, {name: {_eq: "B"}}]}
         */
        const [key] = Object.keys(item)
        if (key === "_or") {
            const _orlength = item._or.length
            if (_orlength < 1) {
                console.error("loadFilters.filter._and has too short _or", item._or)
                validFilter = false
            }
            if (_orlength > 2) {
                console.error("loadFilters.filter._and has too long _or", item._or)
                validFilter = false
            }
            const [f1, f2] = item._or
            const [f1name] = Object.keys(f1)
            const [f2name] = Object.keys(f2)

            if (f1name !== f2name) {
                console.error("loadFilters.filter._and has _or with different names", item._or)
                validFilter = false
            }
            if (f1name in reducedFilters) {
                // reducedFilters[f1name].push(item._or)
                console.error("loadFilters.filter._and has two _or with same names", item._and)
            } else {
                reducedFilters[f1name] = item
            }
        } else {
            if (key in reducedFilters) {
                reducedFilters[key].push(item)
            } else {
                reducedFilters[key] = [item]
            }
        }
        
    }
    console.log("reducedFilters", JSON.stringify(reducedFilters))
    for(const filtersName in reducedFilters) {
        //rFilter je pole
        const filters = reducedFilters[filtersName]
        if (Array.isArray(filters)) {
            const length = filters.length
            if (length > 2) {
                //console.error("TableHeaderWithFilters.filter._and has _or with different names", item._or)
                validFilter = false
            } else {
                while (filters.lenght < 2) {
                    //doplnime do poctu prazdnymi filtry
                    const item = {}
                    item[filtersName] = {"": ""}
                    filters.push(item)
                }
            }
            //konverze na max dvouprvkove _and
            reducedFilters[filtersName] = {_and:filters}
        } else {
            //_or filter?
            //const [key] = Object.keys(filters)

        }
        
    }

    const {_or} = reducedFilters
    if (_or) {
        for(const item of _or) {
            const [f1, f2] = item._or
            const [f1name] = Object.keys(f1)
            const rf = reducedFilters[f1name]
            if (rf.lenght !== 0) {
                console.error("loadFilters.filter._and has too many filters related to name ", f1name, rf, item)
                validFilter = false
            }
            rf[f1name] = item
        }
    }
    if (validFilter) {
        console.log("loadFilters.valid filter", reducedFilters)
        return {...reducedFilters, _or: null}
    } else {
        console.error("loadFilters.invalid filter", reducedFilters)
        return null
    }    
}

/**
 * State function which updates state (filters) with payload (newFilter)
 * @param {Object} filters this is state for table head filters (similar to Microsoft Excel)
 * @param {Object} newFilter 
 * @returns {Object} new state
 */
const updateFilters = (filters, {attributeName, newFilter}) => {
    // console.log("updateFilters.onChangeFilter", filters, newFilter)
    const result = {...filters}
    result[attributeName] = newFilter
    return result
    
    // const {_and, _or} = newFilter
    // const op = _and || _or
    // // console.log("updateFilters.op", op)

    // let changedFilters = {}
    // if (op.length > 0) {
    //     const [filterName] = Object.keys(op[0])
    //     changedFilters = {...filters}
    //     changedFilters[filterName] = {...newFilter}
    // }
    // // console.log("updateFilters.onChangeFilter", changedFilters)
    // return changedFilters
}

/**
 * 
 * @param {*} filters 
 * @returns 
 */
const getWhereFilter = (filters) => {
    // pripravit funkcni filtr
    const newOriginalFilter = {_and: []}
    for(const key in filters) {
        //projit vsechny dilci filtry pro atributy
        if (key === "_or") {
            //tento klic neodpovida nazvu atributu, pro nyni ignorovat
            continue
        }
        const partialFilter = filters[key]
        const {_or, _and} = partialFilter
        // if (Object.keys(partialFilter).lenght === 0) {
        //     continue
        // }
        if (_and) {
            //je to filtr typu _and, je nutne integrovat jeho prvky
            // console.log("getWhereFilter.newOriginalFilter._and", key, _and)
            newOriginalFilter._and.push(..._and)
        } 
        if (_or) {
            //musi to byt filtr typu _or, je mozne integrovat cely filtr
            // console.log("getWhereFilter.newOriginalFilter._or", key, _or)
            newOriginalFilter._and.push(partialFilter)
        }
    }
    console.log("getWhereFilter.newOriginalFilter", JSON.stringify(newOriginalFilter))
    return  newOriginalFilter
}


const rowFilterUpdateOp = (rowFilter, op) => {
    if (op === "") {
        return null
    }

    const result = {}
    if (rowFilter) {
        const [value] = Object.values(rowFilter) || [""]
        result[op] = value
    } else {
        result[op] = ""
    }
    return result
}

const rowFilterUpdateValue = (rowFilter, value) => {
    const result = {}
    if (rowFilter) {
        const [op] = Object.keys(rowFilter)
        if (op) {
            result[op] = value
        } else {
            result._eq = value
        }
    } else {
        result._eq = value
    }
    return result
}


/**
 * 
 * @param {*} filter 
 * @param {*} attributeName 
 * @function
 * @returns filter derived from `filter` param for `attrbiutename` it serves as initial value for filter editor
 */
const dialogSetFilter = (filter, attributeName) => {
    // console.log("setCorrectFilter converting", filter)
    const notNullFilter = filter || {_and:[{attributeName: {"": ""}}, {attributeName: {"": ""}}]}
    const result = {}
    const keys = Object.keys(notNullFilter)
    let key = null
    if (keys.length === 1) {
        // throw Error(`Filter must have exactly one key ${JSON.stringify(filter)} -? ${keys}`)
        key = keys[0]
        if ((key !== "_or") & (key !== "_and")) {
            // throw Error(`Filter must have '_or' or '_and' key ${JSON.stringify(filter)} -> "${key}"`)
            key = "_and"
        }            
        result[key] = notNullFilter[key]            
    } else {
        key = "_and"
    }
    const value = notNullFilter[key]
    if (! Array.isArray(value)) {
        // throw Error(`Filter must have top key value must be array ${JSON.stringify(filter)} -> ${value}`)
        const filter0 = {}
        filter0[attributeName] = {"": ""}
        const filter1 = {}
        filter1[attributeName] = {"": ""}
        result[key] = [filter0, filter1]
    } else {
        const renamedFilterItems = []
        for(const item of value) {
            const keys = Object.keys(item)
            if (keys.length !== 1) {
                throw Error(`Filter must have exactly one key ${JSON.stringify(keys)}`)
            }
            const key = keys[0]    
            if (key !== attributeName) {
                continue
                // console.error(`Filter must have exactly one key ${JSON.stringify(key)}`)
            }
            //vlozime spravne, bez ohledu na skutecne jmeno
            const renamedItem = {}
            renamedItem[attributeName] = item[key]
            renamedFilterItems.push(renamedItem)                
        }
        result[key] = renamedFilterItems    
    }
    // setLocalFilter(newFilter)
    // console.log("newFilter set", result)
    return result

}

/**
 * 
 * @param {*} oldFilter 
 * @param {*} param1 
 * @function
 * @returns updated filter
 */
const dialogUpdateFilter = (oldFilter, {index, attributeName, newFilterValue}) => {
    const namedFilterValue = {}
    namedFilterValue[attributeName] = {...newFilterValue}

    const [op] = Object.keys(oldFilter)
    let [filterArray] = Object.values(oldFilter)
    if (index >= filterArray.length) {
        console.log("long", index, filterArray.length)
        filterArray.push(namedFilterValue)
    } else {
        console.log("short", index, filterArray.length)
        filterArray = filterArray.toSpliced(index, 1, namedFilterValue)
    }
    const newFilter = {}
    newFilter[op] = filterArray
    
    console.log("reduced.oldFilter", oldFilter)
    console.log("reduced.newFilter", newFilter)
    const {_or: orArray, _and: andArray} = newFilter
    const array = orArray || andArray
    const reduced = array.filter(f => {
        if (f) {
            const [simplefilter] = Object.values(f)
            if (!simplefilter) {
                console.log("simplefilter", f)
                return false
            }
            const [key] = Object.keys(simplefilter)
            // const [value] = Object.values(simplefilter)
            if (key === "") {
                return false
            }
            if (!key) {
                return false
            }
            return true
        }
        return false
    })
    .map( r=> ({...r}))
    console.log("onFilterChange.reduced", reduced)
    if (orArray) {
        newFilter._or = reduced
    } else {
        if (andArray) {
            newFilter._and = reduced
        } 
    }
    console.log("onFilterChange.newFilter", newFilter)
    return newFilter
}

export { getWhereFilter, updateFilters, loadFilters, rowFilterUpdateOp, rowFilterUpdateValue, dialogSetFilter, dialogUpdateFilter }

