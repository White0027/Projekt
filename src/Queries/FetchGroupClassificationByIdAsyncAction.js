import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: groupById(id: $id) {
        __typename
        id
        events {
          id
        }
        name
        nameEn
        changedby {
          id
          name
        }
        created
        lastchange
        createdby {
          id
          fullname
        }
        email
        valid
        grouptype {
          id
          name
        }
        subgroups {
          id
          name
        }
        mastergroup {
          id
          name
        }
        memberships {
          id
          valid
          enddate
        }
        roles {
          id
          valid
        }
        rbacobject {
          id
        }
      }
  }`

export const FetchGroupClassificationByIdAsyncAction = CreateAsyncActionFromQuery(query)