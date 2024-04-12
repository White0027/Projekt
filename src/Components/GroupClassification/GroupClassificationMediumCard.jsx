/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const GroupClassificationMediumCard = ({groupclassification}) => {
    return (
        <CardCapsule title={"Skupinová klasifikace - atributy " + groupclassification?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{groupclassification?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
