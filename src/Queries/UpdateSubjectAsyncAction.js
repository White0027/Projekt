import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `	
mutation($id: UUID!, $name: String)
{
  result: programUpdate(program: 
  {	id: $id,
    name: $name, })
  {
    id
    msg
  }
}
`
export const UpdateSubjectAsyncAction = CreateAsyncActionFromMutation(mutation)