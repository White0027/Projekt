import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UpdateSemesterAsyncAction } from "../../Queries/UpdateSemesterAsyncAction";

export const SemesterEditCard = ({semester}) => {
    return (
        <CardCapsule title={"Semestr - atributy " + semester?.order}>
            <Row>
                <Col>Název</Col>
                <Col>{semester?.order}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={semester} attributeName="order" label="Název" asyncUpdater={UpdateSemesterAsyncAction} />
            </Row>
        </CardCapsule>
    )
}
