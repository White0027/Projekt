/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'

import { GroupMediumCard } from './GroupMediumCard'


export const GroupSubgroupsCard = ({group, filterFunc=(g)=>g?.valid===true}) => {
    const subgroups = group?.subgroups || []
    const filtered = subgroups.filter(filterFunc)
    return (
        <CardCapsule title={"Podskupiny " + group?.name}>
            {filtered.map(
                g => <GroupMediumCard key={g.id} group={g} />
            )}
        </CardCapsule>

    )
}
