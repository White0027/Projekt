import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result:userPage(id: $id) {
    __typename
    id
    fullname
    classifications {
      id
      order
      date
      level {
        id
        name
      }
      semester {
        id
        order
        subject {
          id
          name
        }
      }
    }
  }
}`

export const FetchUserClassificationByIdAsyncAction = CreateAsyncActionFromQuery(query)