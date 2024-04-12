/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SubjectMediumCard = ({subject}) => {
    return (
        <CardCapsule title={"Akreditace - atributy " + subject?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{subject?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
