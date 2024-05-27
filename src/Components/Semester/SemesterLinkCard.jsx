import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { Dropdown } from "react-bootstrap";

//Topics: Dropdown, ProxyLink

export const SemesterLinkCard = ({ semester, children }) => {
    return (
        <CardCapsule title={"Téma Semestru"}>
            <div>
                {semester?.topics.map((topic, index) => (
                    <Row key={index}>
                        <Col>
                            {`${index + 1}. ${topic.name}`}
                        </Col>
                    </Row>
                ))}
            </div>
        </CardCapsule>
    );
};