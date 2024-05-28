import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

const UserShort = ({ fullname }) => {
    return (
        <>
            {fullname} <br />
        </>
    )
}

export const AccreditationStudentsCard = ({ accreditation, title = "Studenti", valid = true }) => {

    const students = accreditation?.students || []
    const fullnames = students.map(m => m?.student?.fullname)

    return (
        <CardCapsule title={title}>
            {fullnames.map((fullname, index) => (
                <UserShort key={index} fullname={fullname} />
            ))}
        </CardCapsule>
    )
}
