
# LoyaltyProgramBalance

The balance in a Loyalty Program for some Customer.

## Properties

Name | Type
------------ | -------------
`currentBalance` | number
`pendingBalance` | number
`negativeBalance` | number
`expiredBalance` | number
`spentBalance` | number
`tentativeCurrentBalance` | number
`tentativePendingBalance` | number
`tentativeNegativeBalance` | number

## Example

```typescript
import type { LoyaltyProgramBalance } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "currentBalance": 100,
  "pendingBalance": 10,
  "negativeBalance": 10,
  "expiredBalance": 0,
  "spentBalance": 0,
  "tentativeCurrentBalance": 100,
  "tentativePendingBalance": 20,
  "tentativeNegativeBalance": 100,
} satisfies LoyaltyProgramBalance

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyProgramBalance
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


