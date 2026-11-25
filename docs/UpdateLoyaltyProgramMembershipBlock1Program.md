
# UpdateLoyaltyProgramMembershipBlock1Program

The loyalty program the customer joins.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`title` | string

## Example

```typescript
import type { UpdateLoyaltyProgramMembershipBlock1Program } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 10,
  "name": MainProgram,
  "title": Main Loyalty Program,
} satisfies UpdateLoyaltyProgramMembershipBlock1Program

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateLoyaltyProgramMembershipBlock1Program
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


