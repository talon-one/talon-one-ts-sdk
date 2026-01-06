
# GetLoyaltyCardTransactions200Response


## Properties

Name | Type
------------ | -------------
`hasMore` | boolean
`data` | [Array&lt;CardLedgerTransactionLogEntryIntegrationAPI&gt;](CardLedgerTransactionLogEntryIntegrationAPI.md)

## Example

```typescript
import type { GetLoyaltyCardTransactions200Response } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "hasMore": true,
  "data": null,
} satisfies GetLoyaltyCardTransactions200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetLoyaltyCardTransactions200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


