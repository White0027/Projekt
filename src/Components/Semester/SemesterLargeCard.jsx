import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { SemesterMediumCard } from './SemesterMediumCard'
import { SemesterLink } from './SemesterLink'
import { SemesterLinkCard } from './SemesterLinkCard'
import { SemesterRawCard } from './SemesterRawCard'

export const SemesterLargeCard = ({semester, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Semestr: </span>
            <SemesterLink semester={semester} menu={true}></SemesterLink>
        </div>}>
        <Row>
            <Col md={4}>
                <SemesterMediumCard semester={semester}/>
            </Col>
            <Col md={4}>
                {children}
            </Col>
            <Col md={4}>
                <SemesterLinkCard semester={semester}/>
            </Col>
            
            </Row>
        <br />
        <Row>
            <Col>
                <SemesterRawCard semester={semester}/>
            </Col>
        </Row>
    </CardCapsule>
    )
}
