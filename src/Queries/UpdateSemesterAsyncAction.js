import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `	
mutation ($id: UUID!, $lastchange: DateTime!, $order: Int!) 
{
  result: programSemesterUpdate(semester: {id: $id, lastchange: $lastchange, order: $order}) 
  {
    id
    msg
    result: semester {
      id
      lastchange
      name
      order
      subject {
        name
      }
      classificationType {
        name
      }
    }
  }
}
`
export const UpdateSemesterAsyncAction = CreateAsyncActionFromMutation(mutation)