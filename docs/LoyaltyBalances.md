
# LoyaltyBalances

List of loyalty balances for a ledger and its subledgers.

## Properties

Name | Type
------------ | -------------
`balance` | [LoyaltyBalance](LoyaltyBalance.md)
`subledgerBalances` | [{ [key: string]: LoyaltyBalance; }](LoyaltyBalance.md)

## Example

```typescript
import type { LoyaltyBalances } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "balance": null,
  "subledgerBalances": {mysubledger={activePoints=286, pendingPoints=50, spentPoints=150, expiredPoints=25, negativePoints=0}},
} satisfies LoyaltyBalances

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyBalances
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


