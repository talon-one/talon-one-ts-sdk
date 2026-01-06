
# ScimBaseGroup

Define the schema for base fields in a group using the SCIM provisioning protocol. Talon.One uses this schema to create roles.

## Properties

Name | Type
------------ | -------------
`displayName` | string
`members` | [Array&lt;ScimGroupMember&gt;](ScimGroupMember.md)

## Example

```typescript
import type { ScimBaseGroup } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "displayName": Manager,
  "members": null,
} satisfies ScimBaseGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimBaseGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


