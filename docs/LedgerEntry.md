
# LedgerEntry


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`profileId` | string
`accountId` | number
`loyaltyProgramId` | number
`eventId` | number
`amount` | number
`reason` | string
`expiryDate` | Date
`referenceId` | number

## Example

```typescript
import type { LedgerEntry } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "profileId": URNGV8294NV,
  "accountId": null,
  "loyaltyProgramId": 323414846,
  "eventId": 3,
  "amount": 100,
  "reason": Customer appeasement.,
  "expiryDate": 2022-04-26T11:02:38Z,
  "referenceId": null,
} satisfies LedgerEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LedgerEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


