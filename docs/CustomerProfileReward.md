
# CustomerProfileReward

A reward instance held by a customer profile.

## Properties

Name | Type
------------ | -------------
`id` | number
`integrationId` | string
`rewardId` | number
`rewardIntegrationId` | string
`rewardName` | string
`description` | string
`rule` | [RuleMetadata](RuleMetadata.md)
`status` | string
`unlockedAt` | Date
`unlockedByProfileIntegrationId` | string
`usedAt` | Date
`usedByProfileIntegrationId` | string
`loyaltyProgramId` | number
`loyaltyCardIdentifier` | string

## Example

```typescript
import type { CustomerProfileReward } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "integrationId": reward-unlock-123,
  "rewardId": 12,
  "rewardIntegrationId": free-coffee,
  "rewardName": Free coffee,
  "description": One free coffee of any size,
  "rule": null,
  "status": unlocked,
  "unlockedAt": 2026-07-01T09:00:00Z,
  "unlockedByProfileIntegrationId": customer2839,
  "usedAt": 2026-07-02T10:30:00Z,
  "usedByProfileIntegrationId": customer2840,
  "loyaltyProgramId": 9,
  "loyaltyCardIdentifier": summer-loyalty-card-0543,
} satisfies CustomerProfileReward

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerProfileReward
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


