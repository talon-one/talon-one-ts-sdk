
# ScimGroup

Define the schema for groups created using the SCIM provisioning protocol. In Talon.One, a `Group` corresponds to a [role](https://docs.talon.one/docs/product/account/account-settings/managing-roles), and `members` are the [users](https://docs.talon.one/docs/product/account/account-settings/managing-users) assigned to that role.

## Properties

Name | Type
------------ | -------------
`displayName` | string
`members` | [Array&lt;ScimGroupMember&gt;](ScimGroupMember.md)
`id` | string

## Example

```typescript
import type { ScimGroup } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "displayName": Manager,
  "members": null,
  "id": 359,
} satisfies ScimGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


