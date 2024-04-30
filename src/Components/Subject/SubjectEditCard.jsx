/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateSubjectAsyncAction } from '../Queries/UpdateSubjectAsyncAction'

export const SubjectEditCard = ({subject}) => {
    return (
        <CardCapsule title={"Subjekt - atributy " + subject?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{subject?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={subject} attributeName="name" label="Název" asyncUpdater={UpdateSubjectAsyncAction} />
            </Row>    
            <Row>
                <Col>Počátek</Col>
                <Col>{subject?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{subject?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
