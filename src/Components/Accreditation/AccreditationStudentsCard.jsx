// /* eslint-disable react/prop-types */
// import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'


// const Students = ({students}) => {
//     return (
//         <Row>
//             <Col>{students?.student?.id}</Col>
//             <Col>{students?.student?.name}</Col>
//         </Row>
//     )
// }

// export const AccreditationStudentsCard = ({students}) => {
//     const id = students?.id || []
//     const filtered = (valid===null)?id:id.filter(
//         r => r?.valid === valid
//     )

//     return (
//         <CardCapsule title="Studenti">
//             {filtered.map(
//                 r => <Students key={r.id} student={r} />
//             )}
//         </CardCapsule>
//     )
// }

// /* eslint-disable react/prop-types */
// import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
// import { AccreditationMediumCard } from './AccreditationMediumCard'


// export const AccreditationStudentsCard = ({students, filterFunc=(g)=>g?.valid===true}) => {
//     const students = students?.student || []
//     const filtered = students.filter(filterFunc)
//     return (
//         <CardCapsule title={"Podskupiny " + students?.name}>
//             {filtered.map(
//                 g => <AccreditationMediumCard key={g.id} students={g} />
//             )}
//         </CardCapsule>

//     )
// }

/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import { UserLink } from '../User/UserLink'


const UserShort = ({user}) => {
    return (
        <>
            <UserLink user={user} /> <br/>
        </>
    )
}

export const AccreditationStudentsCard = ({students, title="Studenti", valid=true}) => {
    const student = students?.student || []
    const filtered = (valid===null)?student:student.filter(m => m?.valid === valid)
    const mapped = filtered.map(m => m?.user)
    return (
        <CardCapsule title={title}>
            {mapped.map(
                u => <UserShort key={u.id} user={u} />
            )}
        </CardCapsule>

    )
}
