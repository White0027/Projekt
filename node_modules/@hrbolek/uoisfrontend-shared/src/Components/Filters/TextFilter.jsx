import { useState } from 'react'

import { TextInput } from '../TextInput'

/**
 * shared module.
 * @module shared/components
 */



export const TextFilter = ({opName, attributeName, onChangeFilter}) => {
    const [id] = useState(crypto.randomUUID())
    const [value, setValue] = useState("")
    const onChange_ = (newValue) => {
        setValue(newValue)
        const result = {}
        result[attributeName] = {}
        result[attributeName][opName] = newValue
        if (onChangeFilter) {
            if (newValue === "") {
                onChangeFilter(null)
            } else {
                onChangeFilter(result)
            }
            
        }
    }
    return (
        <div className="form-floating">
            <TextInput id={id} value={value} onChange={onChange_} />
            {/* <label htmlFor={id}>{`Zadejte hodnotu filtru (${attributeName})`}</label> */}
            <label htmlFor={id}>{`Zadejte hodnotu filtru`}</label>
        </div>
    )
}