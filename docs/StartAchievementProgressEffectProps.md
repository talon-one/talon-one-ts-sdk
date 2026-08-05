
# StartAchievementProgressEffectProps

This effect indicates that the customer\'s progress in an achievement was started during the current session. The progress value is set to 0. It is triggered when a rule using the [Start achievement progress](https://docs.talon.one/docs/product/rules/effects/use-effects#start-achievement-progress) effect is successfully validated.  This effect only marks the start of progress tracking. It can fire together with `increaseAchievementProgress` when progress starts and increases at the same time. In that case, both effects share the same `progressTrackerId`, `startDate`, and `endDate`.  For [on-completion achievements](https://docs.talon.one/docs/product/campaigns/achievements/achievements-overview#recurring-on-completion-achievements), each iteration also gets its own `startDate` and `endDate`. 

## Properties

Name | Type
------------ | -------------
`achievementId` | number
`achievementName` | string
`progressTrackerId` | number
`target` | number
`startDate` | Date
`endDate` | Date

## Example

```typescript
import type { StartAchievementProgressEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "achievementId": 10,
  "achievementName": FreeCoffee10Orders,
  "progressTrackerId": 42,
  "target": 10,
  "startDate": 2026-04-16T15:25:37Z,
  "endDate": 2026-04-30T11:24:59Z,
} satisfies StartAchievementProgressEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StartAchievementProgressEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


