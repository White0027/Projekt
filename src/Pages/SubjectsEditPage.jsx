import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchSubjectByIdAsyncAction } from "../Queries/FetchSubjectByIdAsyncAction"
import { SubjectsLargeCard } from "../Components/Subjects/SubjectsLargeCard"
import { SubjectsEditCard } from "../Components/Subjects/SubjectsEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst subjekt", success: "Načtení subjektu se povedlo"})
export const SubjectsEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [Subjects, userPromise] = useFreshItem({id}, FetchSubjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (Subjects) {
        return (
            <SubjectsLargeCard subjects={Subjects}>
                <SubjectsEditCard subjects={Subjects} />
            </SubjectsLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}