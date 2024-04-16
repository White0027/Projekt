import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: acClassificationById(id: $id) {
      __typename
      id
      lastchange
      order
    }
  }`

export const FetchUserClassificationByIdAsyncAction = CreateAsyncActionFromQuery(query)