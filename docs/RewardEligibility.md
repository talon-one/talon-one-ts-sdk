
# RewardEligibility

The customer\'s eligibility for the reward based on the specified customer profile or loyalty card.

## Properties

Name | Type
------------ | -------------
`passed` | boolean
`details` | [Array&lt;RewardEligibilityFailureDetails&gt;](RewardEligibilityFailureDetails.md)

## Example

```typescript
import type { RewardEligibility } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "passed": true,
  "details": null,
} satisfies RewardEligibility

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RewardEligibility
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


