
# UpdateLoyaltyProgramMembershipBlock


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`operator` | string
`program` | [UpdateLoyaltyProgramMembershipBlock1Program](UpdateLoyaltyProgramMembershipBlock1Program.md)
`joinDate` | any

## Example

```typescript
import type { UpdateLoyaltyProgramMembershipBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": join,
  "program": null,
  "joinDate": {{$Now}},
} satisfies UpdateLoyaltyProgramMembershipBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateLoyaltyProgramMembershipBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


