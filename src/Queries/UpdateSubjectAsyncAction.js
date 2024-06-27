import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `	
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $nameEn: String)
{
  result: programSubjectUpdate(subject: 
  {	id: $id,
    lastchange: $lastchange,
    name: $name,
    nameEn: $nameEn})
  {
    id
    msg
    result: subject
    {
      id
      lastchange
      name
      nameEn
    }
  }
}
`
export const UpdateSubjectAsyncAction = CreateAsyncActionFromMutation(mutation)