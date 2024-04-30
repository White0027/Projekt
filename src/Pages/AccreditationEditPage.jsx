import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchAccreditationByIdAsyncAction } from "../Queries/FetchAccreditationByIdAsyncAction"
import { AccreditationLargeCard } from "../Components/Accreditation/AccreditationLargeCard"
import { AccreditationEditCard } from "../Components/Accreditation/AccreditationEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst akreditaci", success: "Načtení akreditace se povedlo"})
export const AccreditationEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [accreditation, userPromise] = useFreshItem({id}, FetchAccreditationByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (accreditation) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Události nahrány
            //    {JSON.stringify(accreditation)}
            //</div>
            <AccreditationLargeCard accreditation={accreditation}>
                <AccreditationEditCard accreditation={accreditation} />
            </AccreditationLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}