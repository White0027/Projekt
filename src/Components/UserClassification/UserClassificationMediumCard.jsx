/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const UserClassificationMediumCard = ({userclassification}) => {
    return (
        <CardCapsule title={"Uživatelská klasifikace - atributy "}>
            <Row>
                <Col>Název</Col>
                <Col>{userclassification?.fullname}</Col>
            </Row>
            <Row>
                <Col>Jméno studenta</Col>
                <Col>{userclassification?.classifications?.order}</Col>
            </Row>
            <Row>
                <Col>Poslední změna</Col>
                <Col>{userclassification?.classifications?.date}</Col>
            </Row>
            <Row>
                <Col>Známka</Col>
                <Col>{userclassification?.classifications?.level?.name}</Col>
            </Row>
            <Row>
                <Col>Datum</Col>
                <Col>{userclassification?.classifications?.semester?.order}</Col>
            </Row>
            <Row>
                <Col>Zapsal:</Col>
                <Col>{userclassification?.classifications?.semester?.subject?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
