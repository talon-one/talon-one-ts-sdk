
# CouponRejections


## Properties

Name | Type
------------ | -------------
`sessionDetails` | [Array&lt;SessionCoupons&gt;](SessionCoupons.md)
`applicationId` | number
`language` | string

## Example

```typescript
import type { CouponRejections } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "sessionDetails": null,
  "applicationId": 123,
  "language": en,
} satisfies CouponRejections

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponRejections
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


