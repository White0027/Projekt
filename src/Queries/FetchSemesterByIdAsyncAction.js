import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: acSemesterById(id: $id) {
        __typename
        id
        createdby {
          id
          fullname
        }
        changedby {
          id
          fullname
        }
        created
        lastchange
        order
        subject {
          id
          name
        }
        classificationType {
          id
          name
        }
        classifications {
          id
        }
        topics {
          id
        }
      }
  }`

export const FetchSemesterByIdAsyncAction = CreateAsyncActionFromQuery(query)