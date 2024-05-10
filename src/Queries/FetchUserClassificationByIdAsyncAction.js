import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: acClassificationById(id: $id) {
    __typename
    id
    created
    date
    lastchange
    order
    level {
      id
      name
    }
    createdby {
      id
      name
    }
    changedby {
      id
      name
    }
    semester {
      id
      order
    }
    student {
      id
      name
    }
  }
}`

export const FetchUserClassificationByIdAsyncAction = CreateAsyncActionFromQuery(query)