/* eslint-disable react/prop-types */
import { CardCapsule} from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const SubjectsEditCard = ({subjects}) => {
    return (
        <CardCapsule title={"Předmět - atributy " + subjects?.name}>
            <Row>
                <Col>
                    {/* Zde bude create a update */}
                </Col>
            </Row>
        </CardCapsule>
    )
}
