import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserClassificationMediumCard } from './UserClassificationMediumCard'

export const UserClassificationLargeCard = ({userclassification, children}) => {
    return (
        <CardCapsule title={"Uživatelská klasifikace " + userclassification?.order}>
        <Row>
            <Col md={3}>
                <UserClassificationMediumCard userclassification={userclassification}/>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <UserClassificationMediumCard userclassification={userclassification}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {JSON.stringify(userclassification)}
            </Col>
        </Row>
    </CardCapsule>
    )
}
