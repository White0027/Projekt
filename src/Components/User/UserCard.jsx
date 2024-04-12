/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const UserCard = ({user}) => {
    return (
        <div>
        <CardCapsule title="user">
            
            <Row>
                <Col>Jméno</Col>
                <Col>{user.name}</Col>
            </Row>
            <Row>
                <Col>Příjmení</Col>
                <Col>{user.surname}</Col>
            </Row>
            <Row>
                <Col>
                    <button className='btn btn-success'>click</button>
                </Col>
                <Col></Col>
            </Row>
        </CardCapsule>
        </div>
    )
}
