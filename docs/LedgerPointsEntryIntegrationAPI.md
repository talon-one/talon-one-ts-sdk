
# LedgerPointsEntryIntegrationAPI

Loyalty profile points with start and expiry dates.

## Properties

Name | Type
------------ | -------------
`id` | number
`transactionUUID` | string
`created` | Date
`programId` | number
`customerSessionId` | string
`name` | string
`startDate` | string
`expiryDate` | string
`subledgerId` | string
`amount` | number
`validityDuration` | string

## Example

```typescript
import type { LedgerPointsEntryIntegrationAPI } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 123,
  "transactionUUID": ce59f12a-f53b-4014-a745-636d93f2bd3f,
  "created": 2022-01-02T15:04:05Z07:00,
  "programId": 324,
  "customerSessionId": 05c2da0d-48fa-4aa1-b629-898f58f1584d,
  "name": Reward 10% points of a purchase's current total,
  "startDate": 2022-01-02T15:04:05Z07:00,
  "expiryDate": 2022-08-02T15:04:05Z07:00,
  "subledgerId": sub-123,
  "amount": 10.25,
  "validityDuration": 30D,
} satisfies LedgerPointsEntryIntegrationAPI

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LedgerPointsEntryIntegrationAPI
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


