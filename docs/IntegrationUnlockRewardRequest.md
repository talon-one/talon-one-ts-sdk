
# IntegrationUnlockRewardRequest

The request body for unlocking a reward for a customer profile.

## Properties

Name | Type
------------ | -------------
`integrationId` | string
`profileIntegrationId` | string
`loyaltyProgramId` | number
`subledgerId` | string
`responseContent` | Array&lt;string&gt;

## Example

```typescript
import type { IntegrationUnlockRewardRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "integrationId": reward-unlock-123,
  "profileIntegrationId": customer1,
  "loyaltyProgramId": 2,
  "subledgerId": sub1,
  "responseContent": ["customerProfile","effects"],
} satisfies IntegrationUnlockRewardRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationUnlockRewardRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


