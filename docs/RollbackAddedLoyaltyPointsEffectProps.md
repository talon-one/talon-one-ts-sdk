
# RollbackAddedLoyaltyPointsEffectProps

This effect is triggered in the following cases:  - A session was cancelled in which loyalty points have been added. - A session was partially returned and loyalty point were added by the returned items. See [returning items](https://docs.talon.one/docs/dev/tutorials/partially-return-a-session).  If you use the [Add loyalty points per item effect](https://docs.talon.one/docs/product/rules/effects/available-effects#reward-effects), use the `cartItemPosition` property to identify which items the loyalty points were rolled back for.  If you use **Add loyalty points per item** and if the session contains some cart items with _quantity > 1_, use the `cartItemSubPosition` property to identify the item unit in its line item.  If the loyalty program is [profile-based](https://docs.talon.one/docs/product/loyalty-programs/overview#loyalty-program-types), use the `recipientIntegrationId` property to identify the user for whom the loyalty points are rolled back. If the loyalty program is [card-based](https://docs.talon.one/docs/product/loyalty-programs/overview#loyalty-program-types), use the `cardIdentifier` property to identify the loyalty card where the points were originally added.

## Properties

Name | Type
------------ | -------------
`programId` | number
`subLedgerId` | string
`value` | number
`recipientIntegrationId` | string
`transactionUUID` | string
`cartItemPosition` | number
`cartItemSubPosition` | number
`cardIdentifier` | string

## Example

```typescript
import type { RollbackAddedLoyaltyPointsEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "programId": null,
  "subLedgerId": null,
  "value": null,
  "recipientIntegrationId": URNGV8294NV,
  "transactionUUID": null,
  "cartItemPosition": null,
  "cartItemSubPosition": null,
  "cardIdentifier": summer-loyalty-card-0543,
} satisfies RollbackAddedLoyaltyPointsEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackAddedLoyaltyPointsEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


