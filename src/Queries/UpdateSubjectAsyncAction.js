import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `	
mutation($id: UUID!, $lastchange: DateTime!, $name: String)
{
  result: programUpdate(program: 
  {	id: $id,
    lastchange: $lastchange,
    name: $name, })
  {
    id
    msg
    result: program
    {
      id
      lastchange
      name
    }
  }
}
`
export const UpdateSubjectAsyncAction = CreateAsyncActionFromMutation(mutation)