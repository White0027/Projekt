import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: acSubjectById(id: $id) {
        id
        name
        semesters {
            order
            id
        }
    }
}`

export const FetchSubjectsByIdAsyncAction = CreateAsyncActionFromQuery(query)