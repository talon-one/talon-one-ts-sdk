
# ScimBaseUser

Schema definition for base user fields, provisioned using the SCIM protocol and used by Talon.One.

## Properties

Name | Type
------------ | -------------
`active` | boolean
`displayName` | string
`userName` | string
`name` | [ScimBaseUserName](ScimBaseUserName.md)

## Example

```typescript
import type { ScimBaseUser } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "active": true,
  "displayName": John Doe,
  "userName": john.doe@example.com,
  "name": null,
} satisfies ScimBaseUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimBaseUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


