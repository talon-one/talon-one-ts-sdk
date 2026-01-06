
# Role


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`modified` | Date
`accountId` | number
`campaignGroupID` | number
`name` | string
`description` | string
`members` | Array&lt;number&gt;
`acl` | object

## Example

```typescript
import type { Role } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "modified": 2021-09-12T10:12:42Z,
  "accountId": 3886,
  "campaignGroupID": 3,
  "name": Campaign Reviewer,
  "description": Reviews the campaigns,
  "members": [48,562,475,18],
  "acl": {"Role":127,"Applications":null},
} satisfies Role

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Role
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


