import React from 'react';
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';
import { SubjectEditCard } from '../Subject/SubjectEditCard';

export const SemesterMediumCard = ({ semester }) => {
    return (
        <CardCapsule title={"Semestr - atributy "}>
            <Row>
                <Col>Akreditace:</Col>
                <Col>
                    <ProxyLink to={`/accreditation/view/2766fc9a-b095-11ed-9bd8-0242ac110002`}>
                        {"IT Technologie"}
                    </ProxyLink>
                </Col>
            </Row>
            <Row>
                <Col>Předmět:</Col>
                <Col>
                    <ProxyLink to={`/subject/view/${semester?.subject?.id}`}>
                        {`${semester?.subject?.name}`}
                    </ProxyLink>
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