import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query($id: UUID!){
  result: acProgramById(id: $id) {
    __typename
    id
    lastchange
    name
    nameEn
    subjects {
      id
      name
    }
    type {
      id
      lastchange
      name
      nameEn
    }
  }
}`

export const FetchAccreditationByIdAsyncAction = CreateAsyncActionFromQuery(query)