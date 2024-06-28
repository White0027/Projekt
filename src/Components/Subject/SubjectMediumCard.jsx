/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src'
import Dropdown from 'react-bootstrap/Dropdown'

export const SubjectMediumCard = ({subject}) => {
    return (
        <CardCapsule title={"Předměty - atributy "}>
            <Row>
                <Col>Akreditace:</Col>
                <Col>
                <Dropdown className="d-inline mx-2" autoClose="outside" size="sm">
                    <ProxyLink to={`/accreditation/view/${subject?.program?.id}`}>
                        {subject?.program?.name}
                    </ProxyLink>
                    <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm" />
                    <Dropdown.Menu>
                        <Dropdown.Item as={"div"}>
                            <ProxyLink to={`/accreditation/view/${subject?.program?.id}`}>Zobrazit</ProxyLink>
                        </Dropdown.Item>
                        <Dropdown.Item as={"div"}>
                            <ProxyLink to={`/accreditation/edit/${subject?.program?.id}`}>Editovat</ProxyLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
            <Row>
                <Col>Název:</Col>
                <Col>{subject?.name}</Col>
            </Row>
            <Row>
                <Col>Name:</Col>
                <Col>{subject?.nameEn}</Col>
            </Row>
            <Row>
                <Col>Poslední změna:</Col>
                <Col>{subject?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Vytvořeno:</Col>
                <Col>{subject?.created}</Col>
            </Row>
            <Row>
                <Col>Vytvořil:</Col>
                <Col>{subject?.createdby}</Col>
            </Row>
            <Row>
                <Col>Garanti:</Col>
                <Col>{subject?.program?.grantsGroup?.name}</Col>
            </Row>
        </CardCapsule> 
    )
}
