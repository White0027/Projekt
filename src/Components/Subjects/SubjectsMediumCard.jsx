/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SubjectsMediumCard = ({subjects}) => {
    return (
        <CardCapsule title={"Subjekty - atributy " + subjects?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{subjects?.name}</Col>
            </Row>
            <Row>
                <Col>Poslední změna</Col>
                <Col>{subjects?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Vytvořeno</Col>
                <Col>{subjects?.created}</Col>
            </Row>
        </CardCapsule> 
    )
}
