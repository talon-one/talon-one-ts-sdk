
# IntegrationStateV2

Contains all entities that might interest Talon.One integrations. 

## Properties

Name | Type
------------ | -------------
`customerSession` | [CustomerSessionV2](CustomerSessionV2.md)
`customerProfile` | [CustomerProfile](CustomerProfile.md)
`event` | [Event](Event.md)
`loyalty` | [Loyalty](Loyalty.md)
`referral` | [InventoryReferral](InventoryReferral.md)
`coupons` | [Array&lt;IntegrationCoupon&gt;](IntegrationCoupon.md)
`triggeredCampaigns` | [Array&lt;Campaign&gt;](Campaign.md)
`effects` | [Array&lt;Effect&gt;](Effect.md)
`ruleFailureReasons` | [Array&lt;RuleFailureReason&gt;](RuleFailureReason.md)
`createdCoupons` | [Array&lt;Coupon&gt;](Coupon.md)
`createdReferrals` | [Array&lt;Referral&gt;](Referral.md)
`awardedGiveaways` | [Array&lt;Giveaway&gt;](Giveaway.md)
`_return` | [Return](Return.md)
`previousReturns` | [Array&lt;Return&gt;](Return.md)

## Example

```typescript
import type { IntegrationStateV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "customerSession": null,
  "customerProfile": null,
  "event": null,
  "loyalty": null,
  "referral": null,
  "coupons": null,
  "triggeredCampaigns": null,
  "effects": null,
  "ruleFailureReasons": null,
  "createdCoupons": null,
  "createdReferrals": null,
  "awardedGiveaways": null,
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


