/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src'
import Dropdown from 'react-bootstrap/Dropdown'

export const SubjectsMediumCard = ({subjects}) => {
    return (
        <CardCapsule title={"Předměty - atributy "}>
            <Row>
                <Col>Akreditace:</Col>
                <Col>
                <Dropdown className="d-inline mx-2" autoClose="outside" size="sm">
                    <ProxyLink to={`/accreditation/view/${subjects?.program?.id}`}>
                        {subjects?.program?.name}
                    </ProxyLink>
                    <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm" />
                    <Dropdown.Menu>
                        <Dropdown.Item as={"div"}>
                            <ProxyLink to={`/accreditation/view/${subjects?.program?.id}`}>Zobrazit</ProxyLink>
                        </Dropdown.Item>
                        <Dropdown.Item as={"div"}>
                            <ProxyLink to={`/accreditation/edit/${subjects?.program?.id}`}>Editovat</ProxyLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
            <Row>
                <Col>Název:</Col>
                <Col>{subjects?.name}</Col>
            </Row>
            <Row>
                <Col>Name:</Col>
                <Col>{subjects?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Poslední změna:</Col>
                <Col>{subjects?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Vytvořeno:</Col>
                <Col>{subjects?.created}</Col>
            </Row>
            <Row>
                <Col>Vytvořil:</Col>
                <Col>{subjects?.createdby}</Col>
            </Row>
            <Row>
                <Col>Garanti:</Col>
                <Col>{subjects?.program?.grantsGroup?.name}</Col>
            </Row>
        </CardCapsule> 
    )
}
