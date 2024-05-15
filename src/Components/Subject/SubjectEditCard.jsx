/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateSubjectAsyncAction } from '../../Queries/UpdateSubjectAsyncAction'

export const SubjectEditCard = ({subject}) => {
    return (
        <CardCapsule title={"Předmět - atributy " + subject?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{subject?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={subject} attributeName="name" label="Název" asyncUpdater={UpdateSubjectAsyncAction} />
            </Row>
            <Row>
                <Col>Name</Col>
                <Col>{subject?.nameEn}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={subject} attributeName="nameEn" label="Name" asyncUpdater={UpdateSubjectAsyncAction} />
            </Row>
            <Row>
                <Col>Téma hodiny</Col>
                <Col>{subject?.program?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={subject} attributeName="program?.name" label="Téma hodiny" asyncUpdater={UpdateSubjectAsyncAction} />
            </Row>
        </CardCapsule>
    )
}
