import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: acSubjectById(id: $id) {
        __typename
        id
        name
        lastchange
        semesters {
          id
          order
        }
      }
  }`

export const FetchSubjectByIdAsyncAction = CreateAsyncActionFromQuery(query)