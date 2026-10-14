
# IncreaseAchievementProgressPerItemEffectProps

This effect schema is returned when you use the **Update customer progress per item** effect in a rule.  It indicates that the customer\'s progress in an achievement was updated during the current session for a specific cart item.  If your list of cart items is a [bundle definition](https://docs.talon.one/docs/product/rules/create-and-manage-bundles), use the `bundleIndex` and `bundleName` properties to identify the bundle containing the item whose progress was updated.  If the cart item has a quantity greater than one, use the `cartItemSubPosition` property to identify the specific unit within the item\'s line item.  For [on-completion achievements](https://docs.talon.one/docs/product/achievements/overview#recurring-on-completion-achievements), any customer progress exceeding the target automatically starts a new iteration. This generates a new `progressTrackerId` for each iteration, and there can be multiple progress updates for the same achievement from a single validation of this effect.

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
`cartItemPosition` | number
`cartItemSubPosition` | number
`bundleIndex` | number
`bundleName` | string

## Example

```typescript
import type { IncreaseAchievementProgressPerItemEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "achievementId": 10,
  "achievementName": FreeCoffee10Orders,
  "progressTrackerId": null,
  "delta": null,
  "value": null,
  "target": null,
  "isJustCompleted": null,
  "cartItemPosition": null,
  "cartItemSubPosition": null,
  "bundleIndex": null,
  "bundleName": null,
} satisfies IncreaseAchievementProgressPerItemEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IncreaseAchievementProgressPerItemEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


