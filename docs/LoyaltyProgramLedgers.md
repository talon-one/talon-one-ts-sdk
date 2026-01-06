
# LoyaltyProgramLedgers

Customer-specific information about loyalty points.

## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`name` | string
`joinDate` | Date
`ledger` | [LedgerInfo](LedgerInfo.md)
`subLedgers` | [{ [key: string]: LedgerInfo; }](LedgerInfo.md)

## Example

```typescript
import type { LoyaltyProgramLedgers } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 5,
  "title": My loyalty program,
  "name": program1,
  "joinDate": 2024-04-30T15:04:05Z07:00,
  "ledger": null,
  "subLedgers": null,
} satisfies LoyaltyProgramLedgers

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyProgramLedgers
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


