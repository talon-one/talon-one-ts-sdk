
# Meta


## Properties

Name | Type
------------ | -------------
`campaigns` | object
`coupons` | object
`couponRejectionReason` | [CouponRejectionReason](CouponRejectionReason.md)
`referralRejectionReason` | [ReferralRejectionReason](ReferralRejectionReason.md)
`warnings` | object

## Example

```typescript
import type { Meta } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaigns": null,
  "coupons": null,
  "couponRejectionReason": null,
  "referralRejectionReason": null,
  "warnings": null,
} satisfies Meta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Meta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


