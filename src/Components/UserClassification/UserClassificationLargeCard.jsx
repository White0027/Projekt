import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { UserClassificationMediumCard } from './UserClassificationMediumCard'
import { UserClassificationRawCard } from './UserClassificationRawCard'

export const UserClassificationLargeCard = ({userclassification, children}) => {
    return (
        <CardCapsule title={"Klasifikace uživatele " + userclassification?.fullname}>
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
            <UserClassificationRawCard userclassification={userclassification}/>
            </Col>
        </Row>
    </CardCapsule>
    )
}
