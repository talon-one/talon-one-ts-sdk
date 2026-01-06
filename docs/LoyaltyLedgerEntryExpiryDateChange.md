
# LoyaltyLedgerEntryExpiryDateChange

The properties specific to effects for changing the expiry dates of loyalty ledger entries.

## Properties

Name | Type
------------ | -------------
`transactionUUID` | string
`previousExpiryDate` | Date
`newExpiryDate` | Date

## Example

```typescript
import type { LoyaltyLedgerEntryExpiryDateChange } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "transactionUUID": null,
  "previousExpiryDate": null,
  "newExpiryDate": null,
} satisfies LoyaltyLedgerEntryExpiryDateChange

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyLedgerEntryExpiryDateChange
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


