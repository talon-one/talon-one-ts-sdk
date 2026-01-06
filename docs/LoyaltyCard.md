
# LoyaltyCard


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`programID` | number
`programName` | string
`programTitle` | string
`status` | string
`blockReason` | string
`identifier` | string
`usersPerCardLimit` | number
`profiles` | [Array&lt;LoyaltyCardProfileRegistration&gt;](LoyaltyCardProfileRegistration.md)
`ledger` | [LedgerInfo](LedgerInfo.md)
`subledgers` | [{ [key: string]: LedgerInfo; }](LedgerInfo.md)
`modified` | Date
`oldCardIdentifier` | string
`newCardIdentifier` | string
`batchId` | string

## Example

```typescript
import type { LoyaltyCard } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "programID": 125,
  "programName": Loyalty_program,
  "programTitle": Loyalty program,
  "status": active,
  "blockReason": Current card lost. Customer needs a new card.,
  "identifier": summer-loyalty-card-0543,
  "usersPerCardLimit": 111,
  "profiles": null,
  "ledger": null,
  "subledgers": null,
  "modified": 2021-09-12T10:12:42Z,
  "oldCardIdentifier": summer-loyalty-card-0543,
  "newCardIdentifier": summer-loyalty-card-0543,
  "batchId": wdefpov,
} satisfies LoyaltyCard

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyCard
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


