import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubjectsMediumCard } from './SubjectsMediumCard'

export const SubjectsLargeCard = ({subject, children}) => {
    return (
        <CardCapsule title={"Předmět " + subject?.name}>
        <Row>
            <Col md={6}>
                <SubjectsMediumCard subject={subject}/>
            </Col>
        </Row>
        <Col md={6}>
                {children}
            </Col>
        <Row>
            <Col>
                {JSON.stringify(subject)}
            </Col>
        </Row>
    </CardCapsule>
    )
}
