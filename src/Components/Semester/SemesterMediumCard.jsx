/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SemesterMediumCard = ({semester}) => {
    return (
        <CardCapsule title={"Semestr - atributy " + semester?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{semester?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
