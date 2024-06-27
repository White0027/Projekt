import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchSemesterByIdAsyncAction } from "../Queries/FetchSemesterByIdAsyncAction"
import { SemesterLargeCard } from "../Components/Semester/SemesterLargeCard"
import { SemesterEditCard } from "../Components/Semester/SemesterEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst semestr", success: "Načtení semestru se povedlo"})
export const SemesterEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [Semester, userPromise] = useFreshItem({id}, FetchSemesterByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (Semester) {
        return (
            <SemesterLargeCard semester={Semester}>
                <SemesterEditCard semester={Semester} />
            </SemesterLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}