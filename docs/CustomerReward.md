
# CustomerReward

A reward unlocked by a customer profile.

## Properties

Name | Type
------------ | -------------
`applicationId` | number
`profileIntegrationId` | string
`integrationId` | string
`unlockedAt` | Date
`usedAt` | Date

## Example

```typescript
import type { CustomerReward } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationId": 3,
  "profileIntegrationId": customer1,
  "integrationId": reward-unlock-123,
  "unlockedAt": 2024-01-01T00:00:00Z,
  "usedAt": 2024-01-02T00:00:00Z,
} satisfies CustomerReward

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerReward
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


