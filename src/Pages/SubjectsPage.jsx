// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { SubjectsLargeCard } from "../Components/Subjects/SubjectsLargeCard"
import { FetchSubjectsByIdAsyncAction } from "../Queries/FetchSubjectsByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst subjekt", success: "Načtení subjektu se povedlo"})
export const SubjectsPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [subject, userPromise] = useFreshItem({id}, FetchSubjectsByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (subject) {
        return (
            <SubjectsLargeCard subject={subject} />
        )
    } else {
        return (
            <div>Načítání...</div>
        )
    }
}