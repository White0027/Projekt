/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SemesterMediumCard = ({semester}) => {
    return (
        <CardCapsule title={"Semestr - atributy "}>
            <Row>
                <Col>Název</Col>
                <Col>{semester?.order}</Col>
            </Row>
            <Row>
                <Col>Poslední změna</Col>
                <Col>{semester?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Název předmětu</Col>
                <Col>{semester?.subject?.name}</Col>
            </Row>
            <Row>
                <Col>Druh klasifikace</Col>
                <Col>{semester?.classificationType?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
