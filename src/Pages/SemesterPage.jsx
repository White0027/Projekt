// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { SemesterLargeCard } from "../Components/Semester/SemesterLargeCard"
import { FetchSemesterByIdAsyncAction } from "../Queries/FetchSemesterByIdAsyncAction"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst semestr", success: "Načtení semestru se povedlo"})
export const SemesterPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [semester, userPromise] = useFreshItem({id}, FetchSemesterByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (semester) {
        return (
            <SemesterLargeCard semester={semester} />
        )
    } else {
        return (
            <div>Načítání...</div>
        )
    }
    
}