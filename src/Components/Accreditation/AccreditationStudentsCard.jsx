/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Students = ({students}) => {
    return (
        <Row>
            <Col>{students?.student?.id}</Col>
            <Col>{students?.student?.name}</Col>
        </Row>
    )
}

export const AccreditationStudentsCard = ({students}) => {
    const id = students?.id || []
    const filtered = (valid===null)?id:id.filter(
        r => r?.valid === valid
    )

    return (
        <CardCapsule title="Studenti">
            {filtered.map(
                r => <Students key={r.id} student={r} />
            )}
        </CardCapsule>
    )
}