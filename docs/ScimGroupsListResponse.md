
# ScimGroupsListResponse

List of groups created using the SCIM provisioning protocol with an identity provider, for example, Microsoft Entra ID. In Talon.One, a `Group` corresponds to a [role](https://docs.talon.one/docs/product/account/account-settings/managing-roles), and `members` are the [users](https://docs.talon.one/docs/product/account/account-settings/managing-users) assigned to that role.

## Properties

Name | Type
------------ | -------------
`resources` | [Array&lt;ScimGroup&gt;](ScimGroup.md)
`schemas` | Array&lt;string&gt;
`totalResults` | number

## Example

```typescript
import type { ScimGroupsListResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "resources": null,
  "schemas": null,
  "totalResults": null,
} satisfies ScimGroupsListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimGroupsListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


