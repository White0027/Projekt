/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src'

export const SubjectMediumCard = ({subject}) => {
    return (
        <CardCapsule title={"Předměty - atributy "}>
            <Row>
                <Col>Akreditace</Col>
                <Col>
                    <ProxyLink to={`/accreditation/view/2766fc9a-b095-11ed-9bd8-0242ac110002`}>
                        {"IT Technologie"}
                    </ProxyLink>
                </Col>
            </Row>
            <Row>
                <Col>Název</Col>
                <Col>{subject?.name}</Col>
            </Row>
            <Row>
                <Col>Name</Col>
                <Col>{subject?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Poslední změna</Col>
                <Col>{subject?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Vytvořeno</Col>
                <Col>{subject?.created}</Col>
            </Row>
            <Row>
                <Col>Vytvořil</Col>
                <Col>{subject?.createdby}</Col>
            </Row>
            <Row>
                <Col>Téma hodiny</Col>
                <Col>{subject?.program?.name}</Col>
            </Row>
        </CardCapsule> 
    )
}
