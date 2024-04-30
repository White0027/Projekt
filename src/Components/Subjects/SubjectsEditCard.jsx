/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateSubjectsAsyncAction } from '../Queries/UpdateSubjectsAsyncAction'

export const SubjectsEditCard = ({subjects}) => {
    return (
        <CardCapsule title={"Subjekty - atributy " + subjects?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{subjects?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={subjects} attributeName="name" label="Název" asyncUpdater={UpdateSubjectsAsyncAction} />
            </Row>    
            <Row>
                <Col>Počátek</Col>
                <Col>{subjects?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{subjects?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
