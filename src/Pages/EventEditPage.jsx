// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
//import { UserLargeCard } from "../Components"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
//import { FetchUserByIdAsyncAction } from "../Queries"
import { FetchEventByIdAsyncAction } from "../Queries/FetchEventByIdAsyncAction"
import { EventLargeCard } from "../Components/Event/EventLargeCard"
import { EventEditCard } from "../Components/Event/EventEditCard"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst události", success: "Načtení události se povedlo"})
export const EventEditPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [event, userPromise] = useFreshItem({id}, FetchEventByIdAsyncAction)
    userPromise.then(onResolve, onReject)

    if (event) {
        return (
            //<UserLargeCard user={user} />
            //<div>
            //    Události nahrány
            //    {JSON.stringify(event)}
            //</div>
            <EventLargeCard event={event}>
                <EventEditCard event={event} />
            </EventLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}