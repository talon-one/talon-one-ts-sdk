
# LoyaltySubLedger

Ledger of Balance in Loyalty Program for a Customer.

## Properties

Name | Type
------------ | -------------
`total` | number
`totalActivePoints` | number
`totalPendingPoints` | number
`totalSpentPoints` | number
`totalExpiredPoints` | number
`totalNegativePoints` | number
`transactions` | [Array&lt;LoyaltyLedgerEntry&gt;](LoyaltyLedgerEntry.md)
`expiringPoints` | [Array&lt;LoyaltyLedgerEntry&gt;](LoyaltyLedgerEntry.md)
`activePoints` | [Array&lt;LoyaltyLedgerEntry&gt;](LoyaltyLedgerEntry.md)
`pendingPoints` | [Array&lt;LoyaltyLedgerEntry&gt;](LoyaltyLedgerEntry.md)
`expiredPoints` | [Array&lt;LoyaltyLedgerEntry&gt;](LoyaltyLedgerEntry.md)
`currentTier` | [Tier](Tier.md)

## Example

```typescript
import type { LoyaltySubLedger } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "total": null,
  "totalActivePoints": null,
  "totalPendingPoints": null,
  "totalSpentPoints": null,
  "totalExpiredPoints": null,
  "totalNegativePoints": null,
  "transactions": null,
  "expiringPoints": null,
  "activePoints": null,
  "pendingPoints": null,
  "expiredPoints": null,
  "currentTier": null,
} satisfies LoyaltySubLedger

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltySubLedger
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


