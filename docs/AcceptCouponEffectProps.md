
# AcceptCouponEffectProps

This effect indicates that the coupon code supplied was valid.  You should handle this effect by clearing any messages from previous `rejectCoupon` effects and informing the user that the coupon is valid.  The code is automatically redeemed when you close the session.  Other effects, such as [setDiscount](https://docs.talon.one/docs/dev/integration-api/api-effects#setdiscount), provide more information about the actual rewards received.

## Properties

Name | Type
------------ | -------------
`value` | string

## Example

```typescript
import type { AcceptCouponEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
} satisfies AcceptCouponEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AcceptCouponEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


