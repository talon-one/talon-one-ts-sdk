
# AddLoyaltyPointsEffectProps

This effect indicates that a defined amount of loyalty points was successfully added to the customer\'s profile or to a loyalty card.  If you use the [Add loyalty points per item effect](https://docs.talon.one/docs/product/rules/effects/available-effects#reward-effects), use the `cartItemPosition` property to identify which item to add the loyalty points for.  Enabling [partial rewards](https://docs.talon.one/docs/product/applications/manage-general-settings#partial-rewards) allows a rule that would fail because of insufficient budget to pass. The rule still fails when the budget reaches 0. Use the `desiredValue` property to identify the original amount of loyalty points.  If you use **Add loyalty points per item** and if the session contains some cart items with _quantity > 1_, use the `cartItemSubPosition` property to identify the item unit in its line item. See the example below for more information.  If your list of cart items is a [bundle definition](https://docs.talon.one/docs/product/rules/create-and-manage-bundles), use the `bundleIndex` and `bundleName` properties to identify the bundle containing the items for which loyalty points are added.  If you have set custom activation and expiration dates for the loyalty points, use the `startDate` and `expiryDate` properties to identify when the reward will be active and when will expire.  If the loyalty program is [profile-based](https://docs.talon.one/docs/product/loyalty-programs/overview#loyalty-program-types), use the `recipientIntegrationId` property to identify the user who receives the loyalty points. If the loyalty program is [card-based](https://docs.talon.one/docs/product/loyalty-programs/overview#loyalty-program-types), use the `cardIdentifier` property to identify the loyalty card on which these points are added.  The points only persist when the session is closed.

## Properties

Name | Type
------------ | -------------
`name` | string
`programId` | number
`subLedgerId` | string
`value` | number
`desiredValue` | number
`recipientIntegrationId` | string
`startDate` | Date
`expiryDate` | Date
`transactionUUID` | string
`cartItemPosition` | number
`cartItemSubPosition` | number
`cardIdentifier` | string
`bundleIndex` | number
`bundleName` | string
`awaitsActivation` | boolean
`validityDuration` | string

## Example

```typescript
import type { AddLoyaltyPointsEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "programId": null,
  "subLedgerId": null,
  "value": null,
  "desiredValue": null,
  "recipientIntegrationId": URNGV8294NV,
  "startDate": null,
  "expiryDate": null,
  "transactionUUID": null,
  "cartItemPosition": null,
  "cartItemSubPosition": null,
  "cardIdentifier": summer-loyalty-card-0543,
  "bundleIndex": null,
  "bundleName": null,
  "awaitsActivation": null,
  "validityDuration": null,
} satisfies AddLoyaltyPointsEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddLoyaltyPointsEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


