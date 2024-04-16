import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: acSemesterById(id: $id) {
      __typename
      id
      lastchange
      created
    }
  }`

export const FetchSemesterByIdAsyncAction = CreateAsyncActionFromQuery(query)