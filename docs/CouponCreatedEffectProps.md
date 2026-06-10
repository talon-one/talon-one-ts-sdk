
# CouponCreatedEffectProps

This effect indicates that a coupon was created.  For referrals and retention marketing, a common use case is to generate a coupon that can only be redeemed by one specific customer.  Handle this effect by notifying the recipient about their new coupon code.

## Properties

Name | Type
------------ | -------------
`value` | string
`profileId` | string

## Example

```typescript
import type { CouponCreatedEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "profileId": null,
} satisfies CouponCreatedEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponCreatedEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


