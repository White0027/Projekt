import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SemesterMediumCard } from './SemesterMediumCard'
import { SemesterLink } from './SemesterLink'
import { SemesterLinkCard } from './SemesterLinkCard'

export const SemesterLargeCard = ({semester, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Semestr: </span>
            <SemesterLink semester={semester} menu={true}></SemesterLink>
        </div>}>
        <Row>
            <Col md={3}>
                <SemesterMediumCard semester={semester}/>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <SemesterLinkCard semester={semester}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {JSON.stringify(semester)}
            </Col>
        </Row>
    </CardCapsule>
    )
}
