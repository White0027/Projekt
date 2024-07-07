// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { AccreditationLargeCard } from "../Components/Accreditation/AccreditationLargeCard"
import { FetchAccreditationByIdAsyncAction } from "../Queries/FetchAccreditationByIdAsyncAction"

// id: 2766fc9a-b095-11ed-9bd8-0242ac110002

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst akreditaci", success: "Načtení akreditace se povedlo"})
export const AccreditationPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [accreditation, userPromise] = useFreshItem({id}, FetchAccreditationByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (accreditation) {
        return (
            <AccreditationLargeCard accreditation={accreditation}/>
        )
    } else {
        return (
            <div>Načítání...</div>
        )
    }
    
}