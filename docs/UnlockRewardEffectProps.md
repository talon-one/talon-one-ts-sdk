
# UnlockRewardEffectProps

The properties specific to the \"unlockReward\" effect. This gets triggered whenever a validated rule unlocks a reward for a customer profile.

## Properties

Name | Type
------------ | -------------
`integrationId` | string
`rewardId` | number
`applicationId` | number
`profileIntegrationId` | string
`unlockedAt` | Date

## Example

```typescript
import type { UnlockRewardEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "integrationId": reward-unlock-123,
  "rewardId": 5,
  "applicationId": 1,
  "profileIntegrationId": customer1,
  "unlockedAt": 2024-05-29T15:04:05Z,
} satisfies UnlockRewardEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnlockRewardEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


