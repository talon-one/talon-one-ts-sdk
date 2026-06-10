
# RollbackCouponEffectProps

This effect indicates that a coupon code redemption has been rolled back. The coupon becomes redeemable again.  The effect is triggered when you [cancel](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions#manage-the-sessions-state) a session where a coupon was accepted. See an example of use in the [cancelling a session tutorial](https://docs.talon.one/docs/dev/tutorials/roll-back-effects).

## Properties

Name | Type
------------ | -------------
`value` | string

## Example

```typescript
import type { RollbackCouponEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
} satisfies RollbackCouponEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackCouponEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


