
# IntegrationStateV2


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
`referral` | [InventoryReferral](InventoryReferral.md)
`coupons` | [Array&lt;IntegrationCoupon&gt;](IntegrationCoupon.md)
`event` | [Event](Event.md)
`advancedEvent` | [EventV3](EventV3.md)
`customerSession` | [CustomerSessionV2](CustomerSessionV2.md)
`_return` | [Return](Return.md)
`previousReturns` | [Array&lt;Return&gt;](Return.md)

## Example

```typescript
import type { IntegrationStateV2 } from 'talon_one_sdk'

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
  "referral": null,
  "coupons": null,
  "event": null,
  "advancedEvent": null,
  "customerSession": null,
  "_return": null,
  "previousReturns": null,
} satisfies IntegrationStateV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationStateV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


