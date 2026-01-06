
# RollbackIncreasedAchievementProgressEffectProps

The properties specific to the \"rollbackIncreasedAchievementProgress\" effect. This gets triggered whenever a closed session where the `increaseAchievementProgress` effect was triggered is cancelled. This is applicable only when the customer has not completed the achievement.

## Properties

Name | Type
------------ | -------------
`achievementId` | number
`achievementName` | string
`progressTrackerId` | number
`decreaseProgressBy` | number
`currentProgress` | number
`target` | number

## Example

```typescript
import type { RollbackIncreasedAchievementProgressEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "achievementId": 10,
  "achievementName": FreeCoffee10Orders,
  "progressTrackerId": null,
  "decreaseProgressBy": null,
  "currentProgress": null,
  "target": null,
} satisfies RollbackIncreasedAchievementProgressEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackIncreasedAchievementProgressEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


