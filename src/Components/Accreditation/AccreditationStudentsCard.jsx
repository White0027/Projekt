
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

export const AccreditationStudentsCard = ({subjects, title="Studenti", valid=true}) => {
    const name = subjects?.name || []
    const filtered = (valid===null)?name:name.filter(m => m?.valid === valid)
    const mapped = filtered.map(m => m?.user)
    return (
        <CardCapsule title={title}>
            {mapped.map(
                u => <UserShort key={u.id} user={u} />
            )}
        </CardCapsule>

    )
}
