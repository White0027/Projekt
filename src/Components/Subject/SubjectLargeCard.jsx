import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SubjectMediumCard } from './SubjectMediumCard'
import { SubjectLink } from './SubjectLink'
import { SubjectLinkCard } from './SubjectLinkCard'
import { SubjectRawCard } from './SubjectRawCard'
import { SubjectBackCard } from './SubjectBackCard'

export const SubjectLargeCard = ({subject, children, accreditation}) => {
    return (
        <CardCapsule title={<div>
            <span>Předmět: </span>
            <SubjectLink subject={subject} menu={true}></SubjectLink>
        </div>}>
        <Row>
            <Col md={4}>
                <SubjectMediumCard subject={subject}/>
                <SubjectBackCard accreditation={accreditation} />
            </Col>
            <Col md={4}>
                <SubjectLinkCard subject={subject}/>
            </Col>
            <Col md={4}>
                {children}
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                <SubjectRawCard subject={subject}/>
            </Col>
        </Row>
    </CardCapsule>
    )
}
