// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { SubjectLargeCard } from "../Components/Subject/SubjectLargeCard"
import { FetchSubjectByIdAsyncAction } from "../Queries/FetchSubjectByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst subjekt", success: "Načtení subjektu se povedlo"})
export const SubjectPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [subject, userPromise] = useFreshItem({id}, FetchSubjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (subject) {
        return (
            <SubjectLargeCard subject={subject} />
        )
    } else {
        return (
            <div>Načítání...</div>
        )
    }
    
}