import { ProxyLink } from '@hrbolek/uoisfrontend-shared/src';
import Row from 'react-bootstrap/Row'
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Col from 'react-bootstrap/Col'

export const SubjectLinkCard = ({subject, children}) => {
    return (
        <CardCapsule title={"Semestry"}>
            <div>
                {subject?.semesters.map((semester, index) => (
                    <Row key={index}>
                        <Col>
                            <ProxyLink to={`/semester/view/${semester.id}`}>
                                {`${index + 1}. ${semester.subject.name}`}
                            </ProxyLink>
                        </Col>
                    </Row>
                ))}
            </div>
        </CardCapsule>
    );
};