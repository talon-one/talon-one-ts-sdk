
# SetLoyaltyPointsExpiryDateEffectProps

The properties specific to the \"setLoyaltyPointsExpiryDate\" effect. This gets triggered when a validated rule contains the \"set expiry date\" effect. The current expiry date gets set to the date given in the effect. 

## Properties

Name | Type
------------ | -------------
`programId` | number
`subLedgerId` | string
`newExpiryDate` | Date
`affectedTransactions` | [Array&lt;LoyaltyLedgerEntryExpiryDateChange&gt;](LoyaltyLedgerEntryExpiryDateChange.md)

## Example

```typescript
import type { SetLoyaltyPointsExpiryDateEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "programId": null,
  "subLedgerId": null,
  "newExpiryDate": 2024-07-24T14:15:22Z,
  "affectedTransactions": null,
} satisfies SetLoyaltyPointsExpiryDateEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetLoyaltyPointsExpiryDateEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


