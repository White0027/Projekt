/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Dialog } from '../Dialog'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { Funnel, FunnelFill } from 'react-bootstrap-icons'

import { loadFilters, updateFilters, getWhereFilter, dialogSetFilter, dialogUpdateFilter} from './_filterFunctions'
import { StringFilterRow } from './StringFilterRow'
import { FloatFilterRow } from './FloatFilterRow'
import { BooleanFilterRow } from './BooleanFilterRow'
import { DateFilterRow } from './DateFilterRow'

// const configexample = {
//     name: {
//         type: "str"
//     },
//     age: {
//         type: "int"
//     },
//     date: {
//         type: "date"
//     }
// }
// const def = {_and:[{"name": {"": ""}}, {"name": {"": ""}}]}
const FilterDialog = ({filter={_and:[{"name": {"": ""}}, {"name": {"": ""}}]}, attributeName="name", dialogTitle="", onOk, onCancel, FilterComponent}) => {

    const [localFilter, setLocalFilter] = useState(() => dialogSetFilter(filter, attributeName))

    const onOk_ = () => {
        // console.log("Dialog.close.ok")
        if (onOk) {
            onOk(localFilter)
        }
    }

    const onFilterChange = (index) => (filterValue) => {
        // console.log("onFilterChange", index, filterValue)
        // const {_or, _and} = localFilter
        // const newFilter = {}
        // if (_or) {
        //     newFilter._or = _or.toSpliced(index, 1, filterValue)
        // } 
        // if (_and) {
        //     newFilter._and = _and.toSpliced(index, 1, filterValue)
        // } 
        // const {_or: orArray, _and: andArray} = newFilter
        // const array = orArray || andArray
        // const reduced = array.filter(f => {
        //     const [simplefilter] = Object.values(f)
        //     const [key] = Object.keys(simplefilter)
        //     const [value] = Object.values(simplefilter)
        //     return !((key === "") & (value === ""))
        // })
        // // console.log("reduced", newFilter, array, reduced)
        // if (_or) {
        //     newFilter._or = reduced
        // } 
        // if (_and) {
        //     newFilter._and = reduced
        // } 
        // console.log("onFilterChange.newFilter", newFilter)

        const newFilter = dialogUpdateFilter(localFilter, {index, attributeName, newFilterValue: filterValue})
        setLocalFilter(newFilter)
    }

    const onAndOrChange = (e) => {
        const {_or, _and} = localFilter
        const newName = e.target.id
        // console.log("onAndOrChange", newName)
        const newFilter = {}
        if (_or) {
            newFilter[newName] = _or
        } 
        if (_and) {
            newFilter[newName] = _and
        } 
        // console.log("onAndOrChange", filter, newFilter)
        setLocalFilter(newFilter)
    }
    
    // const keys = Object.keys(localFilter)
    // const key = keys[0]
    // const [f1, f2] = localFilter[key]
    const [key] = Object.keys(localFilter)
    let [f1, f2] = localFilter[key]
    if (f1) {
        [f1] = Object.values(f1)
    }
    if (f2) {
        [f2] = Object.values(f2)
    }
    // console.log("Dialog.render", keys, key, f1)
    return (
        <Dialog title={dialogTitle} onOk={onOk_} onCancel={onCancel}>

            {JSON.stringify(localFilter)}
            <FilterComponent filter={f1} onChange={onFilterChange(0)}/>
            <Row>
                <Col>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="_and" checked={key==="_and"} onChange={onAndOrChange}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            A
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="_or" checked={key==="_or"} onChange={onAndOrChange}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Nebo
                        </label>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
            <FilterComponent filter={f2} onChange={onFilterChange(1)}/>
            {/* {JSON.stringify(filter)} */}
        </Dialog>
    )
}


export const StringFilterDialog = ({filter={_and:[{"name": {"": ""}}, {"name": {"": ""}}]}, attributeName="name", dialogTitle="", onOk, onCancel}) => {
    return (
        <FilterDialog filter={filter} attributeName={attributeName} dialogTitle={dialogTitle} onOk={onOk} onCancel={onCancel} FilterComponent={StringFilterRow} />
    )
}

export const FloatFilterDialog = ({filter={_and:[{"name": {"": ""}}, {"name": {"": ""}}]}, attributeName="name", dialogTitle="", onOk, onCancel}) => {
    return (
        <FilterDialog filter={filter} attributeName={attributeName} dialogTitle={dialogTitle} onOk={onOk} onCancel={onCancel} FilterComponent={FloatFilterRow} />
    )
}

export const BooleanFilterDialog = ({filter={_and:[{"name": {"": ""}}, {"name": {"": ""}}]}, attributeName="name", dialogTitle="", onOk, onCancel}) => {
    return (
        <FilterDialog filter={filter} attributeName={attributeName} dialogTitle={dialogTitle} onOk={onOk} onCancel={onCancel} FilterComponent={BooleanFilterRow} />
    )
}

export const DateFilterDialog = ({filter={_and:[{"name": {"": ""}}, {"name": {"": ""}}]}, attributeName="name", dialogTitle="", onOk, onCancel}) => {
    return (
        <FilterDialog filter={filter} attributeName={attributeName} dialogTitle={dialogTitle} onOk={onOk} onCancel={onCancel} FilterComponent={DateFilterRow} />
    )
}


const FilterIconSetup = ({filter}) => {
    const NoFilterResult = {Icon: <Funnel/>, style: "btn btn-sm btn-outline-primary"}
    const SomeFilterResult = {Icon: <FunnelFill/>, style: "btn btn-sm btn-danger"}
    if (filter) {
        if (filter?._and.length == 0) {
            // console.log('FilterIcon', filter)
            return NoFilterResult
        } else {
            return SomeFilterResult
        }
    } else {
        return NoFilterResult
    }
}

const FilterButton = ({filter, attributeName, onChangeFilter, Component}) => {
    const [visible, setVisible] = useState(false)
    // console.log("FilterButton.filter", filter)
    const {Icon, style} = FilterIconSetup({filter})
    const onOk = (filter) => {
        setVisible(false)
        if (onChangeFilter) {
            onChangeFilter(filter)
        }
    }
    const onCancel = () => {
        setVisible(false)
    }
    return (
        <>
            <span className={style} onClick={() => setVisible(!visible)}>{Icon}</span>
            {visible?<Component filter={filter} attributeName={attributeName} onOk={onOk} onCancel={onCancel}/>:""}
        </>
    )
}

export const StringFilterButton = ({filter, attributeName, onChangeFilter}) => {
    return (
        <FilterButton filter={filter} attributeName={attributeName} onChangeFilter={onChangeFilter} Component={StringFilterDialog} />
    )
}

export const FloatFilterButton = ({filter, attributeName, onChangeFilter}) => {
    return (
        <FilterButton filter={filter} attributeName={attributeName} onChangeFilter={onChangeFilter} Component={FloatFilterDialog} />
    )
}

export const BooleanFilterButton = ({filter, attributeName, onChangeFilter}) => {
    return (
        <FilterButton filter={filter} attributeName={attributeName} onChangeFilter={onChangeFilter} Component={BooleanFilterDialog} />
    )
}

export const DateFilterButton = ({filter, attributeName, onChangeFilter}) => {
    return (
        <FilterButton filter={filter} attributeName={attributeName} onChangeFilter={onChangeFilter} Component={DateFilterDialog} />
    )
}


const ColComponents = {
    "str": StringFilterButton,
    "num": FloatFilterButton,
    "bool": BooleanFilterButton,
    "date": DateFilterButton
}

export const TableHeaderWithFilters = ({columns, filter, onFilterChange}) => {

    const onChangeFilter_ = (attributeName) => (newFilter) => {
        const changedFilters = updateFilters(filters, {attributeName, newFilter})
        setFilters(changedFilters)
        if (onFilterChange) {
            const newOriginalFilter = getWhereFilter(changedFilters)
            // console.log("newOriginalFilter", newOriginalFilter)
            onFilterChange(newOriginalFilter)
        }
    }

    // const [filters, setFilters] = useState(() => evaluate())
    const [filters, setFilters] = useState(() => loadFilters(null, filter))
    // const evaluatedFilters = evaluate()
    const evaluatedFilters = filters
    // console.log(evaluatedFilters)
    const cols = columns.map(col => ({ type: col.type, label: col.label, property: col.property }))
    return (  
        <tr>
            {cols.map(
                (col, index) => { 
                    let Component = null
                    if (col.type in ColComponents) {
                        Component = ColComponents[col.type]
                    }
                    // console.log("TableHeaderWithFilters.cols.type", index, col.type)
                    return (
                        <th key={index}>
                            {col.label} {Component?<Component 
                                filter={col.property in evaluatedFilters?evaluatedFilters[col.property]: null} 
                                attributeName={col.property}
                                onChangeFilter={onChangeFilter_(col.property)}/>:""}
                        </th>
                    )
                }
            )}
        </tr>
    )
}

// export const FilterManager = ({config=configexample}) => {
//     return ({})

// }