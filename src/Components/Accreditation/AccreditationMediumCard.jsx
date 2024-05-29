/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AccreditationMediumCard = ({accreditation}) => {
    return (
        <CardCapsule title={"Program - atributy "}>
            <Row>
                <Col>Název:</Col>
                <Col>{accreditation?.name}</Col>
            </Row>
            <Row>
                <Col>Name:</Col>
                <Col>{accreditation?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Typ studia:</Col>
                <Col>{accreditation?.type?.name}</Col>
            </Row>
            <Row>
                <Col>Type of study:</Col>
                <Col>{accreditation?.type?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Garantová skupina:</Col>
                <Col>{accreditation?.grantsGroup?.name}</Col>
            </Row>
            <Row>
                <Col>Licencová skupina:</Col>
                <Col>{accreditation?.licencedGroup?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
