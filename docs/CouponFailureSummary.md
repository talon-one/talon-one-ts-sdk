
# CouponFailureSummary

Summary of the reasons for coupon redemption failure.

## Properties

Name | Type
------------ | -------------
`id` | number
`eventID` | number
`sessionID` | string
`profileID` | string
`status` | string
`couponCode` | string
`language` | string
`shortSummary` | string
`longSummary` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { CouponFailureSummary } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "eventID": 1011,
  "sessionID": 1,
  "profileID": a48f10dddb5c9493aad194e49bb9c1dac,
  "status": rejected,
  "couponCode": ABC123,
  "language": en,
  "shortSummary": Session total was less than the required total.,
  "longSummary": There were 5 items in the cart with SKUs 1,2,3,4,5 and the total is $60 which is less than the required cart total.,
  "createdAt": 2021-07-20T21:59:00Z,
  "updatedAt": 2021-07-20T21:59:00Z,
} satisfies CouponFailureSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponFailureSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


