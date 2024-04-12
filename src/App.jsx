import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { AppProvider } from './Store/AppProvider'

import { AppBody } from './AppBody';
import { Msgs } from './Store';
import { LogButton } from './Components';

const AppMsgs = ({children}) => {
    return (
        <>
            {children}
            <Msgs />
        </>
    )
}

export const AppCanvas = ({children}) => {
    return (
        <div className='container-fluid'>
            <AppProvider>
                <AppMsgs>
                    {children}
                </AppMsgs>
            </AppProvider>
        </div>    
    )
}

export const App = () => {
    return (
        <AppCanvas>            
            <LogButton />
            <AppBody />
        </AppCanvas>    
    )
}

