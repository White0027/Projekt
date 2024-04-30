import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubjectsMediumCard } from './SubjectsMediumCard'

export const SubjectsLargeCard = ({subjects, children}) => {
    return (
        <CardCapsule title={"Subjekty " + subjects?.name}>
        <Row>
            <Col md={4}>
                <SubjectsMediumCard subjects={subject}s/>
            </Col>
            <Col md={4}>
                {children}
            </Col>
            <Col md={4}>
                <SubjectsMediumCard subjects={subjects}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {JSON.stringify(subjects)}
            </Col>
        </Row>
    </CardCapsule>
    )
}
