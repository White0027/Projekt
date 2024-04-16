import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: groupById(id: $id) {
      created
      email
      events {
        description
        enddate
        id
        place
      }
      id
      memberships {
        user {
          email
          fullname
          id
        }
      }
      valid
    }
  }`

export const FetchGroupClassificationByIdAsyncAction = CreateAsyncActionFromQuery(query)