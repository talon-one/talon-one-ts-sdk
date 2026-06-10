
# RejectCouponEffectProps

This effect indicates that the coupon code supplied couldn\'t be used.  You should handle this effect by informing their user the coupon code is invalid.

## Properties

Name | Type
------------ | -------------
`value` | string
`rejectionReason` | string
`conditionIndex` | number
`effectIndex` | number
`details` | string
`campaignExclusionReason` | string

## Example

```typescript
import type { RejectCouponEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "rejectionReason": null,
  "conditionIndex": null,
  "effectIndex": null,
  "details": null,
  "campaignExclusionReason": CampaignGaveLowerDiscount,
} satisfies RejectCouponEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RejectCouponEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


