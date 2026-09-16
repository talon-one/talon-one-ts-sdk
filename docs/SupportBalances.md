
# SupportBalances

The loyalty points balance for a support agent and a specific customer profile.

## Properties

Name | Type
------------ | -------------
`threshold` | number
`awardedPoints` | number
`remainingBalance` | number

## Example

```typescript
import type { SupportBalances } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "threshold": 1000,
  "awardedPoints": 350,
  "remainingBalance": 650,
} satisfies SupportBalances

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SupportBalances
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


