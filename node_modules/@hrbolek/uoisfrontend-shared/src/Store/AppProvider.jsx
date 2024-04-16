/* eslint-disable react/prop-types */
import { Provider } from "react-redux"

import { configureStore } from "@reduxjs/toolkit"
import { MsgReducer } from "./msgs"
import { ItemReducer } from "./keyedreducers"

/**
 * Just store provider for UI
 * @param {*} param0 
 * @returns 
 */
export const AppProvider = ({children}) => {
    const store = configureStore({ 
        reducer: {
            items: ItemReducer,
            msgs: MsgReducer
        }, 
        preloadedState: {
            items: {},
            msgs: {}
        }
    })
    
    return (
        <Provider store={store}>{children}</Provider>
    )
}

