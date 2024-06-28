import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UpdateSubjectAsyncAction } from '../../Queries/UpdateSubjectAsyncAction'

export const SubjectsEditCard = ({subjects}) => {
    return (
        <CardCapsule title={"Editace " + subjects?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{subjects?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={subjects} attributeName="name" label="Název" asyncUpdater={UpdateSubjectAsyncAction} />
            </Row>
        </CardCapsule>
    )
}
