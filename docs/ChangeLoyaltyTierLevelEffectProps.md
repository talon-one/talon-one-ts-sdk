
# ChangeLoyaltyTierLevelEffectProps

This effect indicates that a customer\'s loyalty tier has been upgraded.  This effect is generated only when the [Add loyalty points](https://docs.talon.one/docs/product/rules/effects/use-effects#add-loyalty-points) and the [Add loyalty points per cart item](https://docs.talon.one/docs/product/rules/effects/use-effects#add-loyalty-points-per-cart-item) effects are triggered for a particular customer, and, as a result, the customer\'s loyalty tier is upgraded.

## Properties

Name | Type
------------ | -------------
`ruleTitle` | string
`programId` | number
`subLedgerId` | string
`previousTierName` | string
`newTierName` | string
`expiryDate` | Date

## Example

```typescript
import type { ChangeLoyaltyTierLevelEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "ruleTitle": null,
  "programId": null,
  "subLedgerId": null,
  "previousTierName": null,
  "newTierName": null,
  "expiryDate": null,
} satisfies ChangeLoyaltyTierLevelEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChangeLoyaltyTierLevelEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


