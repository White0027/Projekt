import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubjectsLink } from './SubjectsLink'
import { SubjectsRawCard } from './SubjectsRawCard'
import { SubjectsMediumCard } from './SubjectsMediumCard'
import { AccreditationLink } from '../Accreditation/AccreditationLink'

export const SubjectsLargeCard = ({subjects, accreditation, children}) => {
    return (
        <CardCapsule title={<div>
            <SubjectsLink subjects={subjects} menu={true}></SubjectsLink>
            <span> Zpět:</span>
            <AccreditationLink accreditation={accreditation} menu={true}></AccreditationLink>
        </div>}>
        <Row>
            <Col md={4}>
                <SubjectsMediumCard subjects={subjects}/>
            </Col>
            <Col md={8}>
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
