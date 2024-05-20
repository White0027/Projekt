/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateAccreditationAsyncAction } from '../../Queries/UpdateAccreditationAsyncAction'

export const AccreditationEditCard = ({accreditation}) => {
    return (
        <CardCapsule title={"Program - atributy " + accreditation?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{accreditation?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={accreditation} attributeName="name" label="Název" asyncUpdater={UpdateAccreditationAsyncAction} />
            </Row>
            <Row>
                <Col>Name</Col>
                <Col>{accreditation?.nameEn}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={accreditation} attributeName="nameEn" label="Name" asyncUpdater={UpdateAccreditationAsyncAction} />
            </Row>
        </CardCapsule>
    )
}
