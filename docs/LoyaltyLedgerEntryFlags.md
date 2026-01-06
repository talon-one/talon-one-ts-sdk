
# LoyaltyLedgerEntryFlags

A map of flags providing additional details about the entry.

## Properties

Name | Type
------------ | -------------
`createsNegativeBalance` | boolean

## Example

```typescript
import type { LoyaltyLedgerEntryFlags } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "createsNegativeBalance": null,
} satisfies LoyaltyLedgerEntryFlags

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyLedgerEntryFlags
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


