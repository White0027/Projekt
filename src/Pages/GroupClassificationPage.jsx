// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchGroupClassificationByIdAsyncAction } from "../Queries/FetchGroupClassificationByIdAsyncAction"
import { GroupClassificationLargeCard } from "../Components/GroupClassification/GroupClassificationLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst skupinovou klasifikaci", success: "Načtení skupinové klasifikace se povedlo"})
export const GroupClassificationPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [groupclassification, userPromise] = useFreshItem({id}, FetchGroupClassificationByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (groupclassification) {
        return (
            <GroupClassificationLargeCard groupclassification={groupclassification} />
        )
    } else {
        return (
            <div>Načítání...</div>
        )
    }
    
}