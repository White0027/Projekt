/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

/**
 * shared module.
 * @module shared/hooks
 */


// const fakePromise = {
//     then: (_json) => new Promise((_resolve, _reject) => null),
//     finally: (_json) => new Promise((_resolve, _reject) => null),
//     catch: (_json) => new Promise((_resolve, _reject) => null)
// }
const fakePromise = new Promise(() => 0)

/**
 * @function
 * @param {*} oldItemWithId Object with attribute id
 * @param {function} AsyncAction async function to be executed and which returns incomming data (json)
 * @returns [data, Promise(thenable)]
 */
export const useFreshItem = ({id}, AsyncAction) => {
    //const id = oldItemWithId.id
    // console.log("useFreshItem", id)
    const dispatch = useDispatch()
    const items = useSelector(state => state["items"])
    if (!items) {
        throw Error("bad use of store and useFreshItem hook, checks that store state has items attribute")
    }
    const result = items[id]
    // console.log("useFreshItem", id)
    // console.log("useFreshItem", id, result)
    const [resultPromise, setPromise] = useState(new Promise(() => 0))

    useEffect(
        () => {
            const controller = new AbortController();
            const signal = controller.signal;
            // console.log("useFreshItem.useEffect", id)
            setPromise(_prev => dispatch(AsyncAction({id}, signal)))

            // return () => {
            //     controller.abort()
            // }
        },
        [id, AsyncAction, dispatch]
    )
    return [result, resultPromise]
}

export const useFreshItem_ = ({id}, AsyncAction) => {
    //const id = oldItemWithId.id
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    const result = items[id]

    // const [resultPromise, setPromise] = useState(fakePromise)

    
    return [result, dispatch(AsyncAction({id}))]
}