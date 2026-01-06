
# IncreaseAchievementProgressEffectProps

The properties specific to the \"increaseAchievementProgress\" effect. This gets triggered whenever a validated rule contained an \"increase customer progress\" effect.

## Properties

Name | Type
------------ | -------------
`achievementId` | number
`achievementName` | string
`progressTrackerId` | number
`delta` | number
`value` | number
`target` | number
`isJustCompleted` | boolean

## Example

```typescript
import type { IncreaseAchievementProgressEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "achievementId": 10,
  "achievementName": FreeCoffee10Orders,
  "progressTrackerId": null,
  "delta": null,
  "value": null,
  "target": null,
  "isJustCompleted": null,
} satisfies IncreaseAchievementProgressEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncreaseAchievementProgressEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


