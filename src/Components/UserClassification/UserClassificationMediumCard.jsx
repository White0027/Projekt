/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const UserClassificationMediumCard = ({userclassification}) => {
    return (
        <CardCapsule title={"Uživatelská klasifikace - atributy " + userclassification?.order}>
            <Row>
                <Col>Název</Col>
                <Col>{userclassification?.order}</Col>
            </Row>
        </CardCapsule>
    )
}
