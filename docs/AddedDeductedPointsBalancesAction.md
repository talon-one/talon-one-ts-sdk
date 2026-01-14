
# AddedDeductedPointsBalancesAction


## Properties

Name | Type
------------ | -------------
`amount` | number
`reason` | string
`operation` | string
`startDate` | Date
`expiryDate` | Date

## Example

```typescript
import type { AddedDeductedPointsBalancesAction } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "amount": 10.99,
  "reason": Compensation,
  "operation": null,
  "startDate": 2023-01-24T14:15:22Z,
  "expiryDate": 2024-01-24T14:15:22Z,
} satisfies AddedDeductedPointsBalancesAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddedDeductedPointsBalancesAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


