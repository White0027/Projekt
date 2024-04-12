/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Role = ({role}) => {
    return (
        <Row>
            <Col>{role?.group?.name}</Col>
            <Col>{role?.roletype?.name}</Col>
        </Row>
    )
}

export const UserRolesCard = ({user, valid=true}) => {
    const roles = user?.roles || []
    const filtered = (valid===null)?roles:roles.filter(
        r => r?.valid === valid
    )

    return (
        <CardCapsule title="Role">
            {filtered.map(
                r => <Role key={r.id} role={r} />
            )}
        </CardCapsule>
    )
}
