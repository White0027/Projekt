import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `	
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $nameEn: String)
{
  result: programUpdate(program: 
  {	id: $id,
    lastchange: $lastchange,
    name: $name,
    nameEn: $nameEn,})
  {
    id
    msg
    result: program
    {
      id
      lastchange
      name
      nameEn
    }
  }
}
`
export const UpdateAccreditationAsyncAction = CreateAsyncActionFromMutation(mutation)