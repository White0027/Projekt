/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AccreditationLink } from './AccreditationLink'
import { GroupLink } from '../Group/GroupLink'

export const AccreditationMediumCard = ({accreditation}) => {
    return (
        <CardCapsule title={"Program - atributy "}>
            <Row>
                <Col>Program:</Col>
                <Col><AccreditationLink accreditation={accreditation} menu={true}></AccreditationLink></Col>
            </Row>
            <Row>
                <Col>Name:</Col>
                <Col>{accreditation?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Typ studia:</Col>
                <Col>{accreditation?.type?.name}</Col>
            </Row>
            <Row>
                <Col>Type of study:</Col>
                <Col>{accreditation?.type?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Garanti:</Col>
                <Col>{accreditation?.grantsGroup?<GroupLink group={accreditation?.grantsGroup} menu={true} />:"Nenalezeno"}</Col>
            </Row>
            <Row>
                <Col>Uskutečňovatel:</Col>
                <Col>{accreditation?.licencedGroup?<GroupLink group={accreditation?.licencedGroup} menu={true} />:"Nenalezeno"}</Col>
            </Row>
        </CardCapsule>
    )
}
