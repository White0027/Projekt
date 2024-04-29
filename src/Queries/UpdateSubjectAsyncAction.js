import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `	
mutation($id: UUID!, $lastchange: DateTime!, $name: String,
    $startdatte: DateTime, $enddate: DateTime) {
      result: eventUpdate(event: {
        id: $id,
        lastchange: $lastchange,
        name: $name
          startdate: $startdatte
          enddate: $enddate})
      {
        id
        msg
        result: event {
          id
          lastchange
          name
        }
      }
    }
`
export const UpdateSubjectAsyncAction = CreateAsyncActionFromMutation(mutation)