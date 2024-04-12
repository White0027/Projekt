/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GroupLink } from './GroupLink'
import { UserLink } from '../User/UserLink'


const Roles = ({roles, valid=true}) => {
    const filtered = (valid===null)?roles:roles.filter(
        r => r?.valid === valid
    )
    return (
        <>
            {filtered.map(
                r => <Row key={r.id}>
                    <Col>{r?.roletype?.name}</Col>
                    <Col><UserLink user={r?.user} /></Col>
                </Row>
            )}
        </>
    )
}

export const GroupMediumCard = ({group}) => {
    return (
        <CardCapsule title={"Skupina " + group?.name}>
            {group?.mastergroup?
                <Row>
                    <Col>Nadřízený</Col>
                    <Col><GroupLink group={group?.mastergroup} /></Col>
                </Row>
            :""}            

            <Row>
                <Col>{group?.grouptype?.name}</Col>
                <Col><GroupLink group={group} /></Col>
            </Row>

            <Roles roles={group?.roles||[]} />
        </CardCapsule>

    )
}
