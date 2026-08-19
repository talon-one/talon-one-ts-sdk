
# RollbackUseRewardEffectProps

This effect is triggered when a reward usage has been rolled back by a session cancellation.

## Properties

Name | Type
------------ | -------------
`integrationId` | string
`rewardId` | number
`applicationId` | number

## Example

```typescript
import type { RollbackUseRewardEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "integrationId": 5c0b5e6d-3f8a-4c2b-9f1e-2a7d6b4c8e90,
  "rewardId": 5,
  "applicationId": 1,
} satisfies RollbackUseRewardEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackUseRewardEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


