
# ScimGroupMember

Member of the SCIM group. In Talon.One, the member is a [user](https://docs.talon.one/docs/product/account/account-settings/managing-users) assigned to a specific role.

## Properties

Name | Type
------------ | -------------
`value` | string
`display` | string

## Example

```typescript
import type { ScimGroupMember } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": 258,
  "display": john.doe@example.com,
} satisfies ScimGroupMember

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimGroupMember
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


