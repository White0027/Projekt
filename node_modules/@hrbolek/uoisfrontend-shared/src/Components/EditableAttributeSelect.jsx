/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { CreateAsyncQueryValidator } from "../Store"

/**
 * shared module.
 * @module shared/components
 */

const validator = CreateAsyncQueryValidator({error: "Něco se nepovedlo", success: "Změna uložena"})

/**
 * @function
 * @param {Object} props.item item to be edited
 * @param {Object[]} props.children would be list of <option />
 * @param {String} props.attributeName name of the attribute 
 * @param {function(item): Promise} props.asyncUpdater
 * @returns JSX.Element
 */
export const EditableAttributeSelect = ({item, label, children, attributeName, asyncUpdater}) => {
    const dispatch = useDispatch()
    const attributeValue = item[attributeName]
    const [onResolve, onReject] = validator(dispatch)
    const onChange_ = (e) => {
        const value = e.target.value
        const newItem = {...item}
        newItem[attributeName] = value
        const action = asyncUpdater({...newItem})
        // console.log("EditableAttributeText.action", action)
        dispatch(action).then(onResolve, onReject)
    }
    return (
        // <EditableText id={item.id} value={attributeValue} onChange={onChange_} />
        <div className="form-floating">
            <select className="form-select" id={"select-"+item.id} value={attributeValue} onChange={onChange_} aria-label="">
                {children}
            </select>
            <label htmlFor={"select-"+item.id}>{label}</label>
        </div>
    )
}