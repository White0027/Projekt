/* eslint-disable react/prop-types */
import { useState } from 'react';
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export const UserClassificationMediumCard = ({ userclassification }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelectChange = (event) => {
        setSelectedIndex(event.target.value);
    };

    const selectedClassification = userclassification?.classifications?.[selectedIndex];

    return (
        <CardCapsule title={"Klasifikace uživatele - atributy "}>
            <Row>
                <Col>Název:</Col>
                <Col>{userclassification?.fullname}</Col>
            </Row>
            <Row>
                <Col>Vyberte klasifikaci:</Col>
                <Col>
                    <Form.Select value={selectedIndex} onChange={handleSelectChange}>
                        {userclassification?.classifications?.map((classification, index) => (
                            <option key={index} value={index}>
                                {`Známka č. ${index + 1}`}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
            {selectedClassification && (
                <>
                    <Row>
                        <Col>Číslo:</Col>
                        <Col>{selectedClassification?.order}</Col>
                    </Row>
                    <Row>
                        <Col>Čas zadání:</Col>
                        <Col>{selectedClassification?.date}</Col>
                    </Row>
                    <Row>
                        <Col>Známka:</Col>
                        <Col>{selectedClassification?.level?.name}</Col>
                    </Row>
                    <Row>
                        <Col>Číslo semestru:</Col>
                        <Col>{selectedClassification?.semester?.order}</Col>
                    </Row>
                    <Row>
                        <Col>Název semestru:</Col>
                        <Col>{selectedClassification?.semester?.subject?.name}</Col>
                    </Row>
                </>
            )}
        </CardCapsule>
    );
};