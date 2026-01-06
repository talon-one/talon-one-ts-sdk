
# RoleV2RolesGroup


## Properties

Name | Type
------------ | -------------
`applications` | [{ [key: string]: RoleV2ApplicationDetails; }](RoleV2ApplicationDetails.md)
`loyaltyPrograms` | { [key: string]: string; }
`campaignAccessGroups` | { [key: string]: string; }
`account` | string

## Example

```typescript
import type { RoleV2RolesGroup } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applications": {1={application=Application permission set}, 3={campaign=Campaign manager permission set}, 4={draftCampaign=Campaign read-only permission set}, 5={tools=Tools permission set}},
  "loyaltyPrograms": {10=Loyalty program manager permission set},
  "campaignAccessGroups": {5=Campaign access group manager permission set},
  "account": null,
} satisfies RoleV2RolesGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RoleV2RolesGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


