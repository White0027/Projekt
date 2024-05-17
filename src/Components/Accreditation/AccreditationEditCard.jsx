/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateAccreditationAsyncAction } from '../../Queries/UpdateAccreditationAsyncAction'

export const AccreditationEditCard = ({accreditation}) => {
    return (
        <CardCapsule title={"Akreditace - atributy " + accreditation?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{accreditation?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={accreditation} attributeName="name" label="Název" asyncUpdater={UpdateAccreditationAsyncAction} />
            </Row>
            <Row>
                <Col>Předmět</Col>
                <Col>{accreditation?.subjects?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={accreditation?.subjects} attributeName="name" label="Předmět" asyncUpdater={UpdateAccreditationAsyncAction} />
            </Row>
            <Row>
                <Col>Typ Česky</Col>
                <Col>{accreditation?.type?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={accreditation?.type} attributeName="name" label="Typ Česky" asyncUpdater={UpdateAccreditationAsyncAction} />
            </Row>
            <Row>
                <Col>Typ English</Col>
                <Col>{accreditation?.type?.nameEn}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={accreditation?.type} attributeName="name" label="Typ English" asyncUpdater={UpdateAccreditationAsyncAction} />
            </Row>
        </CardCapsule>
    )
}
