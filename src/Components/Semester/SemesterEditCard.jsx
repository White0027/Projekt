/* eslint-disable react/prop-types */
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
            <Row>
                <Col>Název předmětu</Col>
                <Col>{semester?.subject?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={semester} attributeName="subject?.name" label="Název předmětu" asyncUpdater={UpdateSemesterAsyncAction} />
            </Row>
            <Row>
                <Col>Druh klasifikace</Col>
                <Col>{semester?.classificationType?.name}</Col>
            </Row>
            <Row>
                <EditableAttributeText item={semester} attributeName="classificationType?.name" label="Druh klasifikace" asyncUpdater={UpdateSemesterAsyncAction} />
            </Row>
        </CardCapsule>
    )
}
