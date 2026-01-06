
# NewInviteEmail


## Properties

Name | Type
------------ | -------------
`email` | string
`token` | string

## Example

```typescript
import type { NewInviteEmail } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "email": john.doe@example.com,
  "token": Gy9b8w1irmQtEPo5RmbMmSPheL5h4,
} satisfies NewInviteEmail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewInviteEmail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


