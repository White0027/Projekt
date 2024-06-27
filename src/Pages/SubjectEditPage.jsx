import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchSubjectByIdAsyncAction } from "../Queries/FetchSubjectByIdAsyncAction"
import { SubjectLargeCard } from "../Components/Subject/SubjectLargeCard"
import { SubjectEditCard } from "../Components/Subject/SubjectEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst subjekt", success: "Načtení subjektu se povedlo"})
export const SubjectEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [subject, userPromise] = useFreshItem({id}, FetchSubjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (subject) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Události nahrány
            //    {JSON.stringify(Subject)}
            //</div>
            <SubjectLargeCard subject={subject}>
                <SubjectEditCard subject={subject} />
            </SubjectLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}