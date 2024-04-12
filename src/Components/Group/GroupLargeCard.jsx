/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GroupRawCard } from './GroupRawCard'
import { GroupMediumCard } from './GroupMediumCard'
import { GroupSubgroupsCard } from './GroupSubgroupsCard'
import { GroupMembersCard } from './GroupMembersCard'

export const GroupLargeCard = ({group, children}) => {
    return (
        <CardCapsule title={"Skupina " + group?.name}>
        <Row>
            <Col md={3}>
                <GroupMediumCard group={group} />
                <GroupSubgroupsCard group={group} />
            </Col>
            <Col md={6}>
                {children}
            </Col>
            <Col md={3}>
                <GroupMembersCard group={group} />
                
            </Col>
            
        </Row>
        <br />
        <Row>
            <Col>
                <GroupRawCard group={group}/>
            </Col>
        </Row>
    </CardCapsule>

    )
}
