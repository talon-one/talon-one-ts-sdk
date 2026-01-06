
# LoyaltyLedgerEntry

A single row of the ledger, describing one addition or deduction.

## Properties

Name | Type
------------ | -------------
`created` | Date
`programID` | number
`customerProfileID` | string
`cardID` | number
`customerSessionID` | string
`eventID` | number
`type` | string
`amount` | number
`startDate` | Date
`expiryDate` | Date
`name` | string
`subLedgerID` | string
`userID` | number
`archived` | boolean
`flags` | [LoyaltyLedgerEntryFlags](LoyaltyLedgerEntryFlags.md)

## Example

```typescript
import type { LoyaltyLedgerEntry } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "created": 2021-07-20T22:00:00Z,
  "programID": 5,
  "customerProfileID": URNGV8294NV,
  "cardID": 241,
  "customerSessionID": t2gy5s-47274,
  "eventID": 5,
  "type": addition,
  "amount": 100,
  "startDate": 2021-07-20T22:00:00Z,
  "expiryDate": 2022-07-20T22:00:00Z,
  "name": Add points on purchase,
  "subLedgerID": mysubledger,
  "userID": 499,
  "archived": false,
  "flags": null,
} satisfies LoyaltyLedgerEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyLedgerEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


