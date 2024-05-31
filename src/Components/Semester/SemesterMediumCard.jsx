import React from 'react';
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';
import Dropdown from 'react-bootstrap/Dropdown';

export const SemesterMediumCard = ({ semester }) => {
    return (
        <CardCapsule title={"Semestr - atributy "}>
            <Row>
                <Col>Akreditace:</Col>
                <Col>
                <Dropdown className="d-inline mx-2" autoClose="outside" size="sm">
                    <ProxyLink to={`/accreditation/view/${semester?.subject?.program?.id}`}>
                        {"IT Technologie"}
                    </ProxyLink>
                    <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm" />
                    <Dropdown.Menu>
                        <Dropdown.Item as={"div"}>
                            <ProxyLink to={`/accreditation/view/${semester?.subject?.program?.id}`}>Zobrazit</ProxyLink>
                        </Dropdown.Item>
                        <Dropdown.Item as={"div"}>
                            <ProxyLink to={`/accreditation/edit/${semester?.subject?.program?.id}`}>Editovat</ProxyLink>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>
            <Row>
                <Col>Předmět:</Col>
                <Col>
                    <Dropdown className="d-inline mx-2" autoClose="outside" size="sm">
                        <ProxyLink to={`/subject/view/${semester?.subject?.id}`}>
                            {`${semester?.subject?.name}`}
                        </ProxyLink>
                        <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm" />
                        <Dropdown.Menu>
                            <Dropdown.Item as={"div"}>
                                <ProxyLink to={`/subject/view/${semester?.subject?.id}`}>Zobrazit</ProxyLink>
                            </Dropdown.Item>
                            <Dropdown.Item as={"div"}>
                                <ProxyLink to={`/subject/edit/${semester?.subject?.id}`}>Editovat</ProxyLink>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row>
                <Col>Pořadí:</Col>
                <Col>{semester?.order}</Col>
            </Row>
            <Row>
                <Col>Poslední změna:</Col>
                <Col>{semester?.lastchange}</Col>
            </Row>
            <Row>
                <Col>Název předmětu:</Col>
                <Col>{semester?.subject?.name}</Col>
            </Row>
            <Row>
                <Col>Druh klasifikace:</Col>
                <Col>{semester?.classificationType?.name}</Col>
            </Row>
        </CardCapsule>
    );
};