import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GroupClassificationMediumCard } from './GroupClassificationMediumCard'

export const GroupClassificationLargeCard = ({groupclassification, children}) => {
    return (
        <CardCapsule title={"Skupinová klasifikace " + groupclassification?.name}>
        <Row>
            <Col md={3}>
                <GroupClassificationMediumCard groupclassification={groupclassification}/>
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <GroupClassificationMediumCard groupclassification={groupclassification}/>
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                {JSON.stringify(groupclassification)}
            </Col>
        </Row>
    </CardCapsule>
    )
}
