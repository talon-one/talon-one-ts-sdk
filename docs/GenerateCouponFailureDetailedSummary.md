
# GenerateCouponFailureDetailedSummary


## Properties

Name | Type
------------ | -------------
`applicationID` | number
`sessionID` | string
`eventID` | number
`coupon` | string
`language` | string

## Example

```typescript
import type { GenerateCouponFailureDetailedSummary } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationID": null,
  "sessionID": 05c2da0d-48fa-4aa1-b629-898f58f1584d,
  "eventID": null,
  "coupon": BKDB946,
  "language": en,
} satisfies GenerateCouponFailureDetailedSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateCouponFailureDetailedSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


