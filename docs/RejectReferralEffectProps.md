
# RejectReferralEffectProps

The properties specific to the \"rejectReferral\" effect. This gets triggered whenever the referral code was rejected. See rejectionReason for more info on why.

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
import type { RejectReferralEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "rejectionReason": null,
  "conditionIndex": null,
  "effectIndex": null,
  "details": null,
  "campaignExclusionReason": CampaignGaveLowerDiscount,
} satisfies RejectReferralEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RejectReferralEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


