/*import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation =
    `
mutation($subjectType_id: UUID!, $name: String!) {
  result: subjectInsert(subject: {
    subjecttypeId: $subjectType_id,
    name: $name
  }) {
    id
    msg
    result: subject {
      subjectType
      {
        id
      }
      name
    }
  }
}
`

export const CreateSubjectAsyncAction = CreateAsyncActionFromMutation(mutation)*/