import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchSubjectByIdAsyncAction } from "../Queries/FetchSubjectByIdAsyncAction"
import { SubjectLargeCard } from "../Components/Subject/SubjectLargeCard"
import { SubjectEditCard } from "../Components/Subject/SubjectEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst subjekt", success: "Načtení subjektu se povedlo"})
export const SubjectEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [Subject, userPromise] = useFreshItem({id}, FetchSubjectByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (Subject) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Události nahrány
            //    {JSON.stringify(Subject)}
            //</div>
            <SubjectLargeCard Subject={Subject}>
                <SubjectEditCard Subject={Subject} />
            </SubjectLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}