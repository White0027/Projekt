/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SubjectsMediumCard = ({subject}) => {
    return (
        <CardCapsule title={"Semestry - atributy "}>
            <Row>
                <Col>Pořadí</Col>
                <Col>{subject?.semesters?.order}</Col>
            </Row>
            <Row>
                <Col>ID</Col>
                <Col>{subject?.semesters?.id}</Col>
            </Row>
        </CardCapsule> 
    )
}
