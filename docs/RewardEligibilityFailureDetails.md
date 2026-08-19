
# RewardEligibilityFailureDetails

The details about why the customer is not eligible for the reward.

## Properties

Name | Type
------------ | -------------
`failureCode` | string
`conditionIndex` | number

## Example

```typescript
import type { RewardEligibilityFailureDetails } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "failureCode": CONDITION_NOT_MET,
  "conditionIndex": 0,
} satisfies RewardEligibilityFailureDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RewardEligibilityFailureDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


