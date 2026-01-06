
# CustomerInventory


## Properties

Name | Type
------------ | -------------
`profile` | [CustomerProfile](CustomerProfile.md)
`loyalty` | [Loyalty](Loyalty.md)
`referrals` | [Array&lt;InventoryReferral&gt;](InventoryReferral.md)
`coupons` | [Array&lt;InventoryCoupon&gt;](InventoryCoupon.md)
`giveaways` | [Array&lt;Giveaway&gt;](Giveaway.md)
`achievements` | [Array&lt;AchievementProgressWithDefinition&gt;](AchievementProgressWithDefinition.md)

## Example

```typescript
import type { CustomerInventory } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "profile": null,
  "loyalty": null,
  "referrals": null,
  "coupons": null,
  "giveaways": null,
  "achievements": null,
} satisfies CustomerInventory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerInventory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


