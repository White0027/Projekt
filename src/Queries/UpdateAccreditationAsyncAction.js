import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `	
mutation($id: UUID!, $lastchange: DateTime!, $name: String, $nameEn: String, $subjects: [UUID]!)
{
  result: programUpdate(program: 
  {	id: $id,
    lastchange: $lastchange,
    name: $name,
    nameEn: $nameEn,
    subjects: $subjects})
  {
    id
    msg
    result: program
    {
      id
      lastchange
      name
      nameEn
      subjects
      {
        id
        name
      }
    }
  }
}
`
export const UpdateAccreditationAsyncAction = CreateAsyncActionFromMutation(mutation)