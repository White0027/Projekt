import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AccreditationMediumCard } from './AccreditationMediumCard'
import { AccreditationStudentsCard } from './AccreditationStudentsCard'
import { AccreditationLink } from './AccreditationLink'
import { AccreditationLinkCard } from './AccreditationLinkCard'
import { AccreditationRawCard } from './AccreditationRawCard'
import {SubjectsLink} from '../Subjects/SubjectsLink'

export const AccreditationLargeCard = ({accreditation, subjects, children}) => {
    return (
        <CardCapsule title={<div>
            <span>Program: </span>
            <AccreditationLink accreditation={accreditation} menu={true}></AccreditationLink>
            <span> </span>
            <SubjectsLink subjects={subjects} menu={true}></SubjectsLink>
        </div>}>
        <Row>
            <Col md={4}>
                <AccreditationMediumCard accreditation={accreditation}/>
            </Col>
            <Col md={4}>
                {children}
                <AccreditationLinkCard accreditation={accreditation}/>
            </Col>
            <Col md={4}>
                <AccreditationStudentsCard accreditation={accreditation}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                <AccreditationRawCard accreditation={accreditation}/>
            </Col>
        </Row>
    </CardCapsule>
    )
}
