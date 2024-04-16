import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query($id: UUID!){
  result: acProgramById(id: $id) {
    __typename
    id
  
    lastchange
    created
  
    name
    nameEn
  
    type { id name }
    subjects {
      id
      name
      semesters {
        id
        order
      
        topics {
          id
          name
          order
        }
      }
    }
  }
}`

export const FetchAccreditationByIdAsyncAction = CreateAsyncActionFromQuery(query)