// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { FetchUserClassificationByIdAsyncAction } from "../Queries/FetchUserClassificationByIdAsyncAction"
import { UserClassificationLargeCard } from "../Components/UserClassification/UserClassificationLargeCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst uživatelskou klasifikaci", success: "Načtení uživatelské klasifikace se povedlo"})
export const UserClassificationPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [userclassification, userPromise] = useFreshItem({id}, FetchUserClassificationByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (userclassification) {
        return (
            <UserClassificationLargeCard userclassification={userclassification} />
        )
    } else {
        return (
            <div>Načítání...</div>
        )
    }
    
}