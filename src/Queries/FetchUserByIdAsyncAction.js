import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: userById(id: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003") {
      __typename
      id
      name
      surname
      fullname
      email
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
      university: memberOf(grouptypeId: "cd49e152-610c-11ed-9f29-001a7dda7110") {
        __typename
        id
        name
        email
      }
      faculty: memberOf(grouptypeId: "cd49e153-610c-11ed-bf19-001a7dda7110") {
        __typename
        id
        name
        email
      }
      department: memberOf(grouptypeId: "cd49e155-610c-11ed-844e-001a7dda7110") {
        __typename
        id
        name
        email
      }
      membership {
        id
        valid
        group {
          id
          name
          email
          grouptype {
            id
            name
          }
        }
      }
      roles {
        id
        valid
        group {
          id
          name
        }
        roletype {
          id
          name
        }
      }
    }
  }
`

export const FetchUserByIdAsyncAction = CreateAsyncActionFromQuery(query)