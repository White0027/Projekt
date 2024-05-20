import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AccreditationMediumCard } from './AccreditationMediumCard'
import { AccreditationStudentsCard } from './AccreditationStudentsCard'
import { AccreditationLink } from './AccreditationLink'

export const AccreditationLargeCard = ({accreditation, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Program: </span>
            <AccreditationLink accreditation={accreditation} menu={true}></AccreditationLink>
        </div>}>
        <Row>
            <Col md={4}>
                <AccreditationMediumCard accreditation={accreditation}/>
            </Col>
            <Col md={4}>
                {children}
            </Col>
            <Col md={4}>
                <AccreditationStudentsCard accreditation={accreditation}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {JSON.stringify(accreditation)}
            </Col>
        </Row>
    </CardCapsule>
    )
}
