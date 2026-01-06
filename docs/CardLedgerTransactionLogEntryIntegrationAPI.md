
# CardLedgerTransactionLogEntryIntegrationAPI

Log entry for a given loyalty card transaction.

## Properties

Name | Type
------------ | -------------
`transactionUUID` | string
`created` | Date
`programId` | number
`cardIdentifier` | string
`customerSessionId` | string
`type` | string
`name` | string
`startDate` | string
`expiryDate` | string
`subledgerId` | string
`amount` | number
`id` | number
`rulesetId` | number
`ruleName` | string

## Example

```typescript
import type { CardLedgerTransactionLogEntryIntegrationAPI } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "transactionUUID": ce59f12a-f53b-4014-a745-636d93f2bd3f,
  "created": 2022-01-02T15:04:05Z07:00,
  "programId": 324,
  "cardIdentifier": summer-loyalty-card-0543,
  "customerSessionId": 05c2da0d-48fa-4aa1-b629-898f58f1584d,
  "type": addition,
  "name": Reward 10% points of a purchase's current total,
  "startDate": 2022-01-02T15:04:05Z07:00,
  "expiryDate": 2022-08-02T15:04:05Z07:00,
  "subledgerId": sub-123,
  "amount": 10.25,
  "id": 123,
  "rulesetId": 11,
  "ruleName": Add 2 points,
} satisfies CardLedgerTransactionLogEntryIntegrationAPI

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CardLedgerTransactionLogEntryIntegrationAPI
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


