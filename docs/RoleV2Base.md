
# RoleV2Base


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`permissions` | [RoleV2Permissions](RoleV2Permissions.md)
`members` | Array&lt;number&gt;

## Example

```typescript
import type { RoleV2Base } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Campaign and campaign access group manager,
  "description": Allows you to create and edit campaigns for specific Applications, delete specific campaign access groups, and view loyalty programs.,
  "permissions": null,
  "members": [10, 12],
} satisfies RoleV2Base

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RoleV2Base
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


