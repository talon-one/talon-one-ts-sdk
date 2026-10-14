
# RollbackIncreasedAchievementProgressPerItemEffectProps

This effect schema is returned when you cancel or [reopen a customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/reopenCustomerSession) that previously validated the **Update customer progress per item** effect.  It indicates that the customer\'s progress in an achievement was rolled back for a specific cart item.  If your list of cart items is a [bundle definition](https://docs.talon.one/docs/product/rules/create-and-manage-bundles), use the `bundleIndex` and `bundleName` properties to identify the bundle containing the item whose progress was rolled back.  If the session contains cart items with _quantity > 1_, use the `cartItemSubPosition` property to identify the specific unit within the item\'s line item.  The effect is also triggered for completed achievements if the **Allow progress rollback for completed achievements** setting is enabled. You can enable this through the [Campaign Manager](https://docs.talon.one/docs/product/achievements/manage-achievements) or the [Management API](https://docs.talon.one/management-api#tag/Achievements/operation/createAchievement) by setting the `achievementAllowRollbackAfterCompletion` property to `true`. This setting only applies to one-time and recurring on expiration achievements.

## Properties

Name | Type
------------ | -------------
`achievementId` | number
`achievementName` | string
`progressTrackerId` | number
`decreaseProgressBy` | number
`currentProgress` | number
`target` | number
`cartItemPosition` | number
`cartItemSubPosition` | number
`bundleIndex` | number
`bundleName` | string

## Example

```typescript
import type { RollbackIncreasedAchievementProgressPerItemEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "achievementId": 10,
  "achievementName": FreeCoffee10Orders,
  "progressTrackerId": null,
  "decreaseProgressBy": null,
  "currentProgress": null,
  "target": null,
  "cartItemPosition": null,
  "cartItemSubPosition": null,
  "bundleIndex": null,
  "bundleName": null,
} satisfies RollbackIncreasedAchievementProgressPerItemEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackIncreasedAchievementProgressPerItemEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


