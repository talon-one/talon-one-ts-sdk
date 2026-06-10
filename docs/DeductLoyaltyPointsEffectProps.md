
# DeductLoyaltyPointsEffectProps

This effect is triggered when a customer redeems loyalty points. The points are deducted from their active point balance.  If the loyalty program is card-based, use the `cardIdentifier` property to identify the loyalty card from which these points are deducted.  The Rule Engine deducts points in this order:  - Points with the earliest expiry date are deducted first, regardless of when they were added. - Points with an unlimited expiry date are deducted last. - For points with an unlimited expiry date, the points awarded first are deducted first.  The points only persist when the session is closed.

## Properties

Name | Type
------------ | -------------
`ruleTitle` | string
`programId` | number
`subLedgerId` | string
`value` | number
`transactionUUID` | string
`name` | string
`cardIdentifier` | string

## Example

```typescript
import type { DeductLoyaltyPointsEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "ruleTitle": null,
  "programId": null,
  "subLedgerId": null,
  "value": null,
  "transactionUUID": null,
  "name": null,
  "cardIdentifier": summer-loyalty-card-0543,
} satisfies DeductLoyaltyPointsEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeductLoyaltyPointsEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


