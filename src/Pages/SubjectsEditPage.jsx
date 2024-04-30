import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchSubjectsByIdAsyncAction } from "../Queries/FetchSubjectsByIdAsyncAction"
import { SubjectsLargeCard } from "../ComponentsSubjects/SubjectsLargeCard"
import { SubjectsEditCard } from "../Components/Subjects/SubjectsEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst subjekty", success: "Načtení subjektů se povedlo"})
export const SubjectsEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [Subjects, userPromise] = useFreshItem({id}, FetchSubjectsByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (Subjects) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Události nahrány
            //    {JSON.stringify(Subjects)}
            //</div>
            <SubjectsLargeCard Subjects={Subjects}>
                <SubjectsEditCard Subjects={Subjects} />
            </SubjectsLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}