import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row'
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Dropdown } from "react-bootstrap";

export const SemesterLinkCard = ({semester, children}) => {
    return (
        <CardCapsule title={"Semestry"}>
        <div>
            <Row>
        <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
        <span>Programování </span>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/semester/view/ce250af4-b095-11ed-9bd8-0242ac110002"}>Programování 1</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/semester/view/85c0db4a-148c-477e-ad5b-3985eaba1f90"}>Programování 2</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/semester/view/0e9ff40a-722c-472a-b08c-b7d892a41b59"}>Programování 3</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
            </Row>
            
            <Row>
        <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
        <span>Databáze </span>
            <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item as={"div"}><ProxyLink to={"/semester/view/f6f0cca7-d5b1-4ab6-881f-792b964fe261"}>Databáze 1</ProxyLink></Dropdown.Item>
                <Dropdown.Item as={"div"}><ProxyLink to={"/semester/view/e1ab1551-0c3d-4f1c-b2d5-f5c053f28b95"}>Databáze 2</ProxyLink></Dropdown.Item>
                <Dropdown.Item as={"div"}><ProxyLink to={"/semester/view/765eb469-6fab-4cd4-b536-288bb77c6e2d"}>Databáze 3</ProxyLink></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown> 
            </Row>

        </div>
        </CardCapsule> 
    )
}