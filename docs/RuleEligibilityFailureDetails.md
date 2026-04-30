
# RuleEligibilityFailureDetails

The details about why the customer was not eligible for the rule in the current session.

## Properties

Name | Type
------------ | -------------
`failureCode` | string
`couponID` | number
`couponValue` | string
`referralID` | number
`referralValue` | string
`conditionIndex` | number
`effectIndex` | number
`details` | string

## Example

```typescript
import type { RuleEligibilityFailureDetails } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "failureCode": null,
  "couponID": 4928,
  "couponValue": null,
  "referralID": null,
  "referralValue": null,
  "conditionIndex": null,
  "effectIndex": null,
  "details": null,
} satisfies RuleEligibilityFailureDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuleEligibilityFailureDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


