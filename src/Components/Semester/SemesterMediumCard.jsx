/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SemesterMediumCard = ({semester}) => {
    return (
        <CardCapsule title={"Semestr - atributy " + semester?.order}>
            <Row>
                <Col>Název</Col>
                <Col>{semester?.order}</Col>
            </Row>
        </CardCapsule>
    )
}
