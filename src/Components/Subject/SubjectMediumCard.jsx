/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SubjectMediumCard = ({subject}) => {
    return (
        <CardCapsule title={"Subjekty - atributy " + subject?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{subject?.name}</Col>
            </Row>
            <Row>
                <Col>Poslední změna</Col>
                <Col>{subject?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Vytvořeno</Col>
                <Col>{subject?.created}</Col>
            </Row>
        </CardCapsule> 
    )
}
