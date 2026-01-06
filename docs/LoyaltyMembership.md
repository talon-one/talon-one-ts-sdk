
# LoyaltyMembership


## Properties

Name | Type
------------ | -------------
`joined` | Date
`loyaltyProgramId` | number

## Example

```typescript
import type { LoyaltyMembership } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "joined": 2012-03-20T14:15:22Z,
  "loyaltyProgramId": 323414846,
} satisfies LoyaltyMembership

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyMembership
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


