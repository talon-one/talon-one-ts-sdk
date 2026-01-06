
# NewExternalInvitation

Parameters for inviting a new user from an external identity provider.

## Properties

Name | Type
------------ | -------------
`name` | string
`userGroups` | Array&lt;string&gt;
`email` | string

## Example

```typescript
import type { NewExternalInvitation } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": John Doe,
  "userGroups": [Managers, Customer support],
  "email": john.doe@example.com,
} satisfies NewExternalInvitation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewExternalInvitation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


