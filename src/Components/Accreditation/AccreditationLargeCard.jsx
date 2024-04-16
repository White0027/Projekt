import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AccreditationMediumCard } from './AccreditationMediumCard'

export const AccreditationLargeCard = ({accreditation, children}) => {
    return (
        <CardCapsule title={"Akreditace " + accreditation?.name}>
        <Row>
            <Col md={3}>
                <AccreditationMediumCard accreditation={accreditation}/>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <AccreditationMediumCard accreditation={accreditation}/>
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
