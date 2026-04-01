
# ActivateLoyaltyPoints

Activate loyalty points

## Properties

Name | Type
------------ | -------------
`transactionUUIDs` | Set&lt;string&gt;
`sessionId` | string

## Example

```typescript
import type { ActivateLoyaltyPoints } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "transactionUUIDs": [8f1a8d7c-9c3e-4a5e-9f0d-2c5f7a3b1cde],
  "sessionId": ac08cc3c43470426591ad75b2d685ec04_v2,
} satisfies ActivateLoyaltyPoints

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ActivateLoyaltyPoints
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


