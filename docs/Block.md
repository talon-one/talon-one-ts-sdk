
# Block

Describes a part of the logic of the rule.

## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`operator` | string
`blocks` | [Array&lt;Block&gt;](Block.md)
`onFailure` | [Array&lt;Block&gt;](Block.md)
`onError` | { [key: string]: Array&lt;Block&gt;; }
`name` | string
`value` | [RedeemLoyaltyPointsBlock1Value](RedeemLoyaltyPointsBlock1Value.md)
`partial` | boolean
`target` | [AwardLoyaltyPointsTarget](AwardLoyaltyPointsTarget.md)
`expression` | Array&lt;any&gt;
`notificationType` | string
`title` | string
`body` | string
`sku` | string
`quantity` | string
`giveawayPool` | [GiveawayPoolBlockReference](GiveawayPoolBlockReference.md)
`profile` | string
`audience` | [AudienceBlockReference](AudienceBlockReference.md)
`program` | [RedeemLoyaltyPointsBlock1Program](RedeemLoyaltyPointsBlock1Program.md)
`subledger` | string
`balance` | string
`redeem` | boolean
`achievement` | [AchievementBlockReference](AchievementBlockReference.md)
`attribute` | [AttributeBlockReference](AttributeBlockReference.md)
`webhook` | [WebhookBlockReference](WebhookBlockReference.md)
`params` | { [key: string]: any; }
`customEffect` | [CustomEffectBlockReference](CustomEffectBlockReference.md)
`eventType` | string
`matchers` | [Array&lt;Block&gt;](Block.md)
`action` | string
`campaignId` | [CreateReferralBlock1CampaignId](CreateReferralBlock1CampaignId.md)
`recipientId` | string
`storeInSession` | boolean
`usageLimit` | [CreateReferralBlock1UsageLimit](CreateReferralBlock1UsageLimit.md)
`discountLimit` | [CreateCouponBlock1DiscountLimit](CreateCouponBlock1DiscountLimit.md)
`startDate` | any
`expiryDate` | any
`attributes` | any
`validCharacters` | string
`pattern` | string
`friendId` | string
`recipient` | string
`tier` | [TierBlockReference](TierBlockReference.md)
`awaitsActivation` | boolean
`validityDuration` | string
`pendingDuration` | string

## Example

```typescript
import type { Block } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": member,
  "blocks": null,
  "onFailure": null,
  "onError": null,
  "name": Purchase Deduction,
  "value": null,
  "partial": false,
  "target": null,
  "expression": null,
  "notificationType": Info,
  "title": You earned a reward!,
  "body": You saved $10 on your order.,
  "sku": SKU1241028,
  "quantity": 1,
  "giveawayPool": null,
  "profile": Current,
  "audience": null,
  "program": null,
  "subledger": main,
  "balance": current,
  "redeem": true,
  "achievement": null,
  "attribute": null,
  "webhook": null,
  "params": {template_id=TPL-10293},
  "customEffect": null,
  "eventType": profileCreated,
  "matchers": null,
  "action": setDiscount,
  "campaignId": null,
  "recipientId": {{$Profile.IntegrationId}},
  "storeInSession": true,
  "usageLimit": null,
  "discountLimit": null,
  "startDate": 2026-12-24T14:15:22Z,
  "expiryDate": 2026-12-31T00:00:00Z,
  "attributes": null,
  "validCharacters": ABC,
  "pattern": SUMMER-####-####,
  "friendId": {{$Profile.IntegrationId}},
  "recipient": Current,
  "tier": null,
  "awaitsActivation": false,
  "validityDuration": 30D,
  "pendingDuration": 3D,
} satisfies Block

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Block
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


