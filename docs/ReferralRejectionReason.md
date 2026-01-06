
# ReferralRejectionReason

Holds a reference to the campaign, the referral and the reason for which that referral was rejected. Should only be present when there is a \'rejectReferral\' effect.

## Properties

Name | Type
------------ | -------------
`campaignId` | number
`referralId` | number
`reason` | string

## Example

```typescript
import type { ReferralRejectionReason } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignId": null,
  "referralId": null,
  "reason": ReferralNotFound,
} satisfies ReferralRejectionReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferralRejectionReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


