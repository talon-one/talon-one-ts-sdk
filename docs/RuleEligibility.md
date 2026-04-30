
# RuleEligibility

The customer\'s eligibility for a rule in the current session, based on whether all of the rule\'s conditions were met.

## Properties

Name | Type
------------ | -------------
`passed` | boolean
`couponCode` | string
`details` | [RuleEligibilityFailureDetails](RuleEligibilityFailureDetails.md)

## Example

```typescript
import type { RuleEligibility } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "passed": true,
  "couponCode": null,
  "details": null,
} satisfies RuleEligibility

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuleEligibility
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


