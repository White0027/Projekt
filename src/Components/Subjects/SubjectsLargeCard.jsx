import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubjectsLink } from './SubjectsLink'
import { SubjectsRawCard } from './SubjectsRawCard'
import { SubjectsMediumCard } from './SubjectsMediumCard'

export const SubjectsLargeCard = ({subjects, accreditation, children}) => {
    return (
        <CardCapsule title={<div>
            <SubjectsLink subjects={subjects} menu={true}></SubjectsLink>
        </div>}>
        <Row>
            <Col md={4}>
                <SubjectsMediumCard subjects={subjects}/>
            </Col>
            <Col md={4}>
                {children}
            </Col>
            <Col md={4}>
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
