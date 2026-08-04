
# RollbackIncreasedAchievementProgressEffectProps

This effect indicates that the customer\'s progress in an achievement was rolled back.  The Rule Engine triggers this effect when you cancel or [reopen a customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/reopenCustomerSession) that previously validated the [Update customer progress](https://docs.talon.one/docs/product/rules/effects/use-effects#update-customer-progress) effect and triggered the [increaseAchievementProgress](https://docs.talon.one/docs/dev/integration-api/api-effects#increaseachievementprogress) API effect.  The effect is also triggered for completed achievements if the **Allow progress rollback for completed achievements** setting is enabled. You can enable this through the [Campaign Manager](https://docs.talon.one/docs/product/achievements/manage-achievements) or the [Management API](https://docs.talon.one/management-api#tag/Achievements/operation/createAchievement) by setting the `achievementAllowRollbackAfterCompletion` property to `true`. This setting only applies to one-time and recurring on expiration achievements.

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


