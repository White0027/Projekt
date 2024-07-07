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
          program {
            id
            name
            students {
              id
              student {
                id
                fullname
              }
            }
          }
        }
        classificationType {
          id
          name
        }
        classifications {
          id
        }
        topics {
          name
          id
        }
      }
  }`

export const FetchSemesterByIdAsyncAction = CreateAsyncActionFromQuery(query)