import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: eventById(id: $id) {
          __typename
          id
          name
          lastchange
          startdate
          enddate
          eventType {
            id
            name
          }
      }
  }`

export const FetchSubjectByIdAsyncAction = CreateAsyncActionFromQuery(query)