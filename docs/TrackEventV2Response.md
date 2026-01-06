
# TrackEventV2Response

This is the response type returned by the trackEventV2 endpoint. 

## Properties

Name | Type
------------ | -------------
`customerProfile` | [CustomerProfile](CustomerProfile.md)
`event` | [Event](Event.md)
`loyalty` | [Loyalty](Loyalty.md)
`triggeredCampaigns` | [Array&lt;Campaign&gt;](Campaign.md)
`ruleFailureReasons` | [Array&lt;RuleFailureReason&gt;](RuleFailureReason.md)
`awardedGiveaways` | [Array&lt;Giveaway&gt;](Giveaway.md)
`effects` | [Array&lt;Effect&gt;](Effect.md)
`createdCoupons` | [Array&lt;Coupon&gt;](Coupon.md)
`createdReferrals` | [Array&lt;Referral&gt;](Referral.md)

## Example

```typescript
import type { TrackEventV2Response } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "customerProfile": null,
  "event": null,
  "loyalty": null,
  "triggeredCampaigns": null,
  "ruleFailureReasons": null,
  "awardedGiveaways": null,
  "effects": null,
  "createdCoupons": null,
  "createdReferrals": null,
} satisfies TrackEventV2Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackEventV2Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


