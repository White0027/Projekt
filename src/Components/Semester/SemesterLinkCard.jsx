import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Dropdown } from "react-bootstrap";

//Topics: Dropdown, ProxyLink

export const SemesterLinkCard = ({semester, children}) => {
    return (
        <CardCapsule title={"Téma Semestru"}>
        <div>
            <Row>
        <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
        <span>Téma </span>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <center>
                        Úvod
                    </center>
                </Dropdown.Menu>
            </Dropdown> 
            </Row>

        </div>
        </CardCapsule> 
    )
}