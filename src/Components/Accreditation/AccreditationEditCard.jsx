/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateAccreditationAsyncAction } from '../Queries/UpdateAccreditationAsyncAction'

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
                <Col>Počátek</Col>
                <Col>{accreditation?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{accreditation?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
