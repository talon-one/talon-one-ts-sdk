
# ScimUsersListResponse

List of users that have been provisioned using the SCIM protocol with an identity provider, for example, Microsoft Entra ID.

## Properties

Name | Type
------------ | -------------
`resources` | [Array&lt;ScimUser&gt;](ScimUser.md)
`schemas` | Array&lt;string&gt;
`totalResults` | number

## Example

```typescript
import type { ScimUsersListResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "resources": null,
  "schemas": null,
  "totalResults": null,
} satisfies ScimUsersListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimUsersListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


