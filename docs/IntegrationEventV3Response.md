
# IntegrationEventV3Response


## Properties

Name | Type
------------ | -------------
`customerProfile` | [CustomerProfile](CustomerProfile.md)
`loyalty` | [Loyalty](Loyalty.md)
`triggeredCampaigns` | [Array&lt;Campaign&gt;](Campaign.md)
`campaignEligibility` | [Array&lt;CampaignEligibility&gt;](CampaignEligibility.md)
`effects` | [Array&lt;Effect&gt;](Effect.md)
`ruleFailureReasons` | [Array&lt;RuleFailureReason&gt;](RuleFailureReason.md)
`createdCoupons` | [Array&lt;Coupon&gt;](Coupon.md)
`createdReferrals` | [Array&lt;Referral&gt;](Referral.md)
`awardedGiveaways` | [Array&lt;Giveaway&gt;](Giveaway.md)
`advancedEvent` | [EventV3](EventV3.md)

## Example

```typescript
import type { IntegrationEventV3Response } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "customerProfile": null,
  "loyalty": null,
  "triggeredCampaigns": null,
  "campaignEligibility": null,
  "effects": null,
  "ruleFailureReasons": null,
  "createdCoupons": null,
  "createdReferrals": null,
  "awardedGiveaways": null,
  "advancedEvent": null,
} satisfies IntegrationEventV3Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationEventV3Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


