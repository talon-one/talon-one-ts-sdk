
# IncreaseAchievementProgressEffectProps

This effect indicates that the customer\'s progress in an achievement was updated during the current session. It is triggered when a rule using the [Update customer progress](https://docs.talon.one/docs/product/rules/effects/use-effects#update-customer-progress) effect is successfully validated.  For [on-completion achievements](https://docs.talon.one/docs/product/achievements/achievements-overview#recurring-on-completion-achievements), any customer progress exceeding the target automatically starts a new iteration. This generates a new `progressTrackerId` for each iteration, and there can be multiple progress updates for the same achievement from a single validation of this effect.

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


