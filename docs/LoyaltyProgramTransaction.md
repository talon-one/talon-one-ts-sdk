
# LoyaltyProgramTransaction


## Properties

Name | Type
------------ | -------------
`id` | number
`transactionUUID` | string
`programId` | number
`campaignId` | number
`created` | Date
`type` | string
`amount` | number
`name` | string
`startDate` | string
`expiryDate` | string
`customerProfileId` | string
`cardIdentifier` | string
`subledgerId` | string
`customerSessionId` | string
`importId` | number
`userId` | number
`userEmail` | string
`rulesetId` | number
`ruleName` | string
`flags` | [LoyaltyLedgerEntryFlags](LoyaltyLedgerEntryFlags.md)
`validityDuration` | string

## Example

```typescript
import type { LoyaltyProgramTransaction } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 123,
  "transactionUUID": ce59f12a-f53b-4014-a745-636d93f2bd3f,
  "programId": 324,
  "campaignId": 324,
  "created": 2022-01-02T15:04:05Z07:00,
  "type": addition,
  "amount": 10.25,
  "name": Reward 50 points for each $500 purchase,
  "startDate": 2022-01-02T15:04:05Z07:00,
  "expiryDate": 2022-01-02T15:04:05Z07:00,
  "customerProfileId": kda0fajs0-fad9f-fd9dfsa9-fd9dasjf9,
  "cardIdentifier": summer-loyalty-card-0543,
  "subledgerId": sub-123,
  "customerSessionId": 05c2da0d-48fa-4aa1-b629-898f58f1584d,
  "importId": 4,
  "userId": 5,
  "userEmail": john.doe@example.com,
  "rulesetId": 11,
  "ruleName": 10 points for every $100 spent,
  "flags": null,
  "validityDuration": 30D,
} satisfies LoyaltyProgramTransaction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyProgramTransaction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


