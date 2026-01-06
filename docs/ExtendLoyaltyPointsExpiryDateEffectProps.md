
# ExtendLoyaltyPointsExpiryDateEffectProps

The properties specific to the \"extendLoyaltyPointsExpiryDate\" effect. This gets triggered when a validated rule contains the \"extend expiry date\" effect. The current expiry date gets extended by the time frame given in the effect. 

## Properties

Name | Type
------------ | -------------
`programId` | number
`subLedgerId` | string
`extensionDuration` | string
`affectedTransactions` | [Array&lt;LoyaltyLedgerEntryExpiryDateChange&gt;](LoyaltyLedgerEntryExpiryDateChange.md)

## Example

```typescript
import type { ExtendLoyaltyPointsExpiryDateEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "programId": null,
  "subLedgerId": null,
  "extensionDuration": 12h,
  "affectedTransactions": null,
} satisfies ExtendLoyaltyPointsExpiryDateEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExtendLoyaltyPointsExpiryDateEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


