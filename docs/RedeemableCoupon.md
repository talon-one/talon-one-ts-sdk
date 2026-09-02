
# RedeemableCoupon


## Properties

Name | Type
------------ | -------------
`couponId` | number
`couponCode` | string
`usageCounter` | number
`usageLimit` | number
`campaignName` | string

## Example

```typescript
import type { RedeemableCoupon } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "couponId": 34,
  "couponCode": SUMMER10,
  "usageCounter": 3,
  "usageLimit": 10,
  "campaignName": Summer Sale 2026,
} satisfies RedeemableCoupon

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RedeemableCoupon
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


