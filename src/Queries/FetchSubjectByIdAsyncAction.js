import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: acSubjectById(id: $id) {
        __typename
        id
        name
        created
        lastchange
        nameEn
        changedby {
          email
          fullname
        }
        createdby {
          email
          fullname
        }
        program {
          id
          name
        }
        semesters {
          id
          subject {
            name
          }
        }
        grants {
          id
          name
        }
      }
  }`

export const FetchSubjectByIdAsyncAction = CreateAsyncActionFromQuery(query)