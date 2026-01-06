
# CouponRejectionReason

Holds a reference to the campaign, the coupon and the reason for which that coupon was rejected. Should only be present when there is a \'rejectCoupon\' effect.

## Properties

Name | Type
------------ | -------------
`campaignId` | number
`couponId` | number
`reason` | string

## Example

```typescript
import type { CouponRejectionReason } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignId": 244,
  "couponId": 4928,
  "reason": CouponNotFound,
} satisfies CouponRejectionReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponRejectionReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


