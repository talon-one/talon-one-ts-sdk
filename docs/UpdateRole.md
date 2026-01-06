
# UpdateRole


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`acl` | string
`members` | Array&lt;number&gt;

## Example

```typescript
import type { UpdateRole } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Campaign Manager,
  "description": Manages the campaigns,
  "acl": {Role=128, Applications=null},
  "members": [48, 562, 475, 18],
} satisfies UpdateRole

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateRole
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


