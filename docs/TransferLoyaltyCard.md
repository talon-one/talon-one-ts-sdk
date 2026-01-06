
# TransferLoyaltyCard


## Properties

Name | Type
------------ | -------------
`newCardIdentifier` | string
`blockReason` | string

## Example

```typescript
import type { TransferLoyaltyCard } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "newCardIdentifier": summer-loyalty-card-0543,
  "blockReason": Current card lost. Customer needs a new card.,
} satisfies TransferLoyaltyCard

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferLoyaltyCard
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


