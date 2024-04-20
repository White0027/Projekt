import { createSlice } from '@reduxjs/toolkit';
import { CreateItem, DeleteItem } from './keyedreducers';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useDispatch, useSelector } from 'react-redux';

/**
* Kompletni rez budocim store.
* Obsluhuje skupiny
*/
const MsgSlice = createSlice({
   name: 'msgs',
   initialState: {},
   reducers: {
       msg_add: CreateItem,
       msg_delete: DeleteItem
   }
})

export const MsgReducer = MsgSlice.reducer
export const MsgActions = MsgSlice.actions

// export const Msg_ = ({msg}) => {
//     const dispatch = useDispatch()
//     const onClose = () => {
//         dispatch(MsgActions.msg_delete(msg))
//     }
//     const buttonStyle = msg?.variant ? ("outline-" + msg.variant) : "outline-success"
//     return (
//         <Alert variant={msg.variant} onClose={onClose}>
//             <div className="row">
//                 <div className="col">
//                     {msg?.title}
//                 </div>   
//                 <div className="col d-flex justify-content-end">
//                     <Button onClick={onClose} variant={buttonStyle}>
//                         Close
//                     </Button>
//                 </div>
//             </div>
//         </Alert>
//     )
// }

const Msg = ({msg}) => {
    const dispatch = useDispatch()
    const onClose = () => {
        dispatch(MsgActions.msg_delete(msg))
    }
    const buttonStyle = msg?.variant ? ("outline-" + msg.variant) : "outline-success"
    return (
        <Toast bg={msg.variant} onClose={onClose}>
            <Toast.Header>
                {/* <div className="col d-flex justify-content-end">
                    <Button onClick={onClose} variant={buttonStyle}>
                        Close
                    </Button>
                </div> */}
            </Toast.Header>
            <Toast.Body>
                {msg?.title}
            </Toast.Body>
        </Toast>
    )
}

// export const Msgs_ = () => {
//     const msgs = useSelector(state => state.msgs)
//     return (
//         <>
//             {Object.values(msgs).map(
//                 msg => <Msg key={msg.id} msg={msg} />
//             )}
//         </>
//     )
// }

export const Msgs = () => {
    const msgs = useSelector(state => state.msgs)
    return (
        <ToastContainer position='bottom-end'>
            {Object.values(msgs).map(
                msg => <Msg key={msg.id} msg={msg} />
            )}
        </ToastContainer>
    )
}

const uuid = () => crypto.randomUUID()

export const MsgFlashAction = ({title, delay = 5000, variant = "success", detail=[]}) => (dispatch, getState) => {
    const msgWithId = {id: uuid(), variant: variant, title: title, detail: detail}

    setTimeout(
        () => dispatch(MsgActions.msg_delete(msgWithId)), delay
    )
    return dispatch(MsgActions.msg_add(msgWithId))
}

export const MsgAddAction = ({title, variant = "danger", detail=[]}) => (dispatch, getState) => {
    const msgWithId = {id: uuid(), variant: variant, title: title, detail: detail}

    return dispatch(MsgActions.msg_add(msgWithId))
}

/**
 * Creates validator (function) which called with dispatch returns [onResolve, onReject] functions usable in Promise.then(onResolve, onReject)
 * const validator = CreateAsyncQueryValidator({error: "Error happend", "success": "All went ok"})
 * const dispatch = useDispatch()
 * const [onResolve, onReject] = validator(dispatch)
 * ...
 * fetch().then(onResolve, onReject)
 * 
 * @param {object} reactions {error: "Error happend", "success": "All went ok"}
 * @returns 
 */
export const CreateAsyncQueryValidator = (reactions) => (dispatch) => {
    const onResolve = (json) => {
        // console.log("CreateAsyncQueryValidator.onResolve", json)
        const errors = json?.errors
        if (errors) {
            dispatch(MsgAddAction({title: reactions.error, variant: "danger", detail: errors}));
        } 
        const data = json?.data
        if (data) {
            const result = data?.result
            if (result) {
                // console.log("result?.msg", result?.msg)
                if (result?.msg) {
                    if (result?.msg !== "ok") { 
                        dispatch(MsgAddAction({title: reactions.error, variant: "danger"}));
                    } else {
                        dispatch(MsgFlashAction({title: reactions.success, variant: "success" }))
                    }
                } else {
                    dispatch(MsgFlashAction({title: reactions.success, variant: "success" }))
                }
            }
        }
        return json
    }

    const onReject = (error) => {
        console.log("CreateAsyncQueryValidator.onReject", error)
        dispatch(MsgAddAction({title: reactions.error, variant: "danger", detail: ['' + error]}))
        return error
    }

    return [onResolve, onReject]
}

// export const CreateAsyncQueryValidator_ = (reactions) => async (thenable) => {
//     const dispatch = useDispatch()
//     console.log("CreateAsyncQueryValidator")
//     let json = null
//     try {
//         json = await thenable

//         const errors = json?.errors
//         if (errors) {
//             dispatch(MsgAddAction({title: reactions.error, variant: "danger"}));
//         } else {
//             const data = json?.data
//             if (data) {
//                 const result = data?.result
//                 if (result) {
//                     dispatch(MsgFlashAction({title: reactions.success, variant: "success" }))
//                 }
//             } 
//         }
        
//     } catch (error) {
//         MsgAddAction({title: reactions.error, variant: "danger"});
//     }
//     return json
// }

// export const CreateExceptionCatcher = (exception) => (dispatch, getState) => {
//     dispatch(MsgAddAction())
// }

/**
 * @param {function} reactions.errors function to be called when gql endpoint returns json.errors 
 * @param {function} reactions.fail function to be called when mutation returns json.data.result.msg has no value "ok" and reactions[msg] not present
 * @param {function} reactions.ok function to be called when mutation returns json.data.result or json.data.result.msg is has value "ok"
 */
export const CheckGQLError = (reactions) => (json) => {
    
    console.log("CheckGQLError call")
    const errors = json?.errors
    if (errors) {
        const reaction = reactions?.errors || reactions?.error || reactions["fail"]
        reaction(json)
    } else {
        const msg = json?.data?.result?.msg
        if (msg) {
            const reaction = reactions[msg] || reactions["fail"]
            // const successVariant = "success"
            // const dangerVariant = "danger"
            // const defaultVariant = reaction === "ok" ? successVariant : dangerVariant
            // const variant = reaction?.variant || defaultVariant
            // const label = reaction || ("Změna " + msg)
            // if (variant === successVariant) {
                
            // } else {
            //     variant()
            // }
            if (reaction) {
                reaction(json)
            } else {
                console.warn("no proper reaction found", json)
            }
            
        } else {
            const jsonresult = json?.data?.result
            if (jsonresult) {
                const reaction = reactions["ok"]
                if (reaction) {
                    reaction(json)
                } else {
                    console.error("ok reaction missing")
                }
                    
            } else {
                const reaction = reactions?.errors || reactions?.error || reactions?.fail
                if (reaction) {
                    reaction(`Data nenalezena. ${JSON.stringify(json)}  Server nenašel položku v databázi. Položka neexistuje.`)
                }
                
                console.warn("no proper reaction found", json)
            }
            
        }
    }
    return json
}

// fetch().then(
//     CheckMutationMsg({ok: () => MsgFlashAction(), fail: "Chyba"})()
// )