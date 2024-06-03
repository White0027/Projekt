import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubjectsLink } from './SubjectsLink'
import { SubjectsRawCard } from './SubjectsRawCard'
import { SubjectsBackLink } from './SubjectsBackLink'

export const SubjectsLargeCard = ({subjects, accreditation, children}) => {
    return (
        <CardCapsule title={<div>
            <Row>
                <Col md={11}>
                    <SubjectsLink subjects={subjects}></SubjectsLink>
                </Col>
                <Col md={1}>
                    <SubjectsBackLink accreditation={accreditation}></SubjectsBackLink>
                </Col>
            </Row>
        </div>}>
        <Row>
            <Col>
                {children}
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
                <SubjectsRawCard subjects={subjects}/>
            </Col>
        </Row>
    </CardCapsule>
    )
}
