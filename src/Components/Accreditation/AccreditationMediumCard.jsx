/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AccreditationMediumCard = ({accreditation}) => {
    return (
        <CardCapsule title={"Akreditace - atributy " + accreditation?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{accreditation?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
