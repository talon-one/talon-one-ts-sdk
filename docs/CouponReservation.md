
# CouponReservation


## Properties

Name | Type
------------ | -------------
`couponId` | number
`recipientIntegrationId` | string
`createdAt` | Date

## Example

```typescript
import type { CouponReservation } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "couponId": 6,
  "recipientIntegrationId": URNGV8294NV,
  "createdAt": 2026-08-10T10:00:00Z,
} satisfies CouponReservation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponReservation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


