/* eslint-disable react/prop-types */
import { CardCapsule, EditableAttributeText } from '@hrbolek/uoisfrontend-shared/src'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UpdateSemesterAsyncAction } from "../../Queries/UpdateSemesterAsyncAction";

export const SemesterEditCard = ({semester}) => {
    return (
        <CardCapsule title={"Semestr - atributy " + semester?.name}>
            <Row>
                <Col>Název</Col>
                <Col>{semester?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={semester} attributeName="name" label="Název" asyncUpdater={UpdateSemesterAsyncAction} />
            </Row>
        </CardCapsule>
    )
}
