import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import { AppCanvas, LogButton } from '@hrbolek/uoisfrontend-shared/src'
import { AppBody } from './AppBody';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const App = () => {
    return (
        <Container fluid>
        <AppCanvas>
            <Navbar className='bg-light'>
                <Container>
                    <Navbar.Brand href="" className="justify-content-start">UOIS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <LogButton />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <AppBody />
        </AppCanvas>    
        </Container>
    )
}

