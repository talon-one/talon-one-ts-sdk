
# RoleV2Permissions


## Properties

Name | Type
------------ | -------------
`permissionSets` | [Array&lt;RoleV2PermissionSet&gt;](RoleV2PermissionSet.md)
`roles` | [RoleV2RolesGroup](RoleV2RolesGroup.md)

## Example

```typescript
import type { RoleV2Permissions } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "permissionSets": [{name=Application permission set, logicalOperations=[getApplicationOperations, editApplicationOperations]}, {name=Campaign manager permission set, logicalOperations=[getCampaignOperations, createCampaignOperations, updateCampaignOperations]}, {name=Campaign read-only permission set, logicalOperations=[getCampaignOperations]}, {name=Loyalty program read-only permission set, logicalOperations=[getLoyaltyProgramOperations]}, {name=Campaign access group manager permission set, logicalOperations=[getCampaignAccessGroupOperations, updateCampaignAccessGroupOperations, deleteCampaignAccessGroupOperations]}],
  "roles": null,
} satisfies RoleV2Permissions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RoleV2Permissions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


