
# ReserveCouponEffectProps

This effect indicates that the given coupon code was reserved for the given customer.  Talon.One provides soft and hard reservations. For more information, see [Reserve a coupon code](https://docs.talon.one/docs/product/rules/effects/use-effects#reserve-a-coupon-code).

## Properties

Name | Type
------------ | -------------
`couponValue` | string
`profileIntegrationId` | string
`isNewReservation` | boolean

## Example

```typescript
import type { ReserveCouponEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "couponValue": null,
  "profileIntegrationId": null,
  "isNewReservation": null,
} satisfies ReserveCouponEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReserveCouponEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


