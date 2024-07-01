import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Dropdown } from 'react-bootstrap';
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';

export const AccreditationLink_ = ({accreditation, children}) => {
    return (
        <ProxyLink to={"/accreditation/view/" + accreditation?.id}>{children?children:accreditation?.name}</ProxyLink>
    )
}

export const AccreditationLink = ({accreditation, children, menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                <AccreditationLink_ accreditation={accreditation}>
                    {children}
                </AccreditationLink_>
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/accreditation/view/" + accreditation?.id} >Zobrazit</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/accreditation/edit/" + accreditation?.id} >Editovat</ProxyLink></Dropdown.Item>
                    <Dropdown.Item as="div">
                    {accreditation?.subjects.map(subject => (
                        <Row key={subject.id} className="mb-2">
                        <Col>
                            <ProxyLink to={`/subjects/edit/${subject.id}`}>
                            Editovat Předmět - {subject.name}
                            </ProxyLink>
                        </Col>
                        </Row>
                    ))}
                    </Dropdown.Item>
                    <Dropdown.Item as={"div"}><ProxyLink to={"/userclassification/view/" + accreditation?.students[0].id} >Klasifikace za semestr</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>         
            )
    } else {
        return (
            <AccreditationLink_ accreditation={accreditation}>{children}</AccreditationLink_>
        )
    }
}

export const AccreditationCreateLink = ({menu=true}) => {
    if (menu) {
        return (
            <Dropdown  className="d-inline mx-2" autoClose="outside" size="sm">
                Akreditace:
                <Dropdown.Toggle split variant='secondary-outline' id="dropdown-basic" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={"div"} ><ProxyLink to={"/accreditation/create"} >Vytvořit</ProxyLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    } else {
        return (
            <div>Error</div>
        )
    }
}