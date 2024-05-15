/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AccreditationMediumCard = ({accreditation}) => {
    return (
        <CardCapsule title={"Akreditace - atributy "}>
            <Row>
                <Col>Název</Col>
                <Col>{accreditation?.name}</Col>
            </Row>
            <Row>
                <Col>Předmět</Col>
                <Col>{accreditation?.subjects?.name}</Col>
            </Row>
            <Row>
                <Col>Typ Česky</Col>
                <Col>{accreditation?.type?.name}</Col>
            </Row>
            <Row>
                <Col>Typ English</Col>
                <Col>{accreditation?.type?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Garantovaná Skupina</Col>
                <Col>{accreditation?.grantsGroup?.name}</Col>
            </Row>
            <Row>
                <Col>Licensovaná Skupina</Col>
                <Col>{accreditation?.licencedGroup?.name}</Col>
            </Row>
        </CardCapsule>
    )
}
