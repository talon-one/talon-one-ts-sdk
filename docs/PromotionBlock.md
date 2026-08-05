
# PromotionBlock

Describes a part of the logic of the rule.

## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`operator` | string
`blocks` | [Array&lt;PromotionBlock&gt;](PromotionBlock.md)
`onFailure` | [Array&lt;PromotionBlock&gt;](PromotionBlock.md)
`onError` | { [key: string]: Array&lt;PromotionBlock&gt;; }
`name` | string
`value` | number
`partial` | boolean
`target` | [TriggerCustomEffectBlock1Target](TriggerCustomEffectBlock1Target.md)
`expression` | Array&lt;any&gt;
`notificationType` | string
`title` | string
`body` | string
`sku` | string
`quantity` | string
`giveawayPool` | [AwardGiveawayBlock1GiveawayPool](AwardGiveawayBlock1GiveawayPool.md)
`profile` | string
`attribute` | [UpdateAttributeValueBlock1Attribute](UpdateAttributeValueBlock1Attribute.md)
`min` | any
`max` | any
`start` | any
`end` | any
`startInclusive` | boolean
`endInclusive` | boolean
`timezoneInsensitive` | boolean
`values` | any
`count` | any
`audience` | [UpdateAudienceMembershipBlock1Audience](UpdateAudienceMembershipBlock1Audience.md)
`program` | [CheckLoyaltyBalanceBlock1Program](CheckLoyaltyBalanceBlock1Program.md)
`subledger` | string
`balance` | string
`redeem` | boolean
`achievement` | [CheckAchievementBlock1Achievement](CheckAchievementBlock1Achievement.md)
`webhook` | [TriggerWebhookBlock1Webhook](TriggerWebhookBlock1Webhook.md)
`params` | { [key: string]: any; }
`customEffect` | [TriggerCustomEffectBlock1CustomEffect](TriggerCustomEffectBlock1CustomEffect.md)
`eventType` | string
`matchers` | [Array&lt;PromotionBlock&gt;](PromotionBlock.md)
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

## Example

```typescript
import type { PromotionBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": available,
  "blocks": null,
  "onFailure": null,
  "onError": null,
  "name": Free Tote Bag,
  "value": 5,
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
  "attribute": null,
  "min": null,
  "max": null,
  "start": null,
  "end": null,
  "startInclusive": true,
  "endInclusive": true,
  "timezoneInsensitive": false,
  "values": null,
  "count": null,
  "audience": null,
  "program": null,
  "subledger": ,
  "balance": current,
  "redeem": true,
  "achievement": null,
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
  "startDate": null,
  "expiryDate": null,
  "attributes": null,
  "validCharacters": ABC,
  "pattern": SUMMER-####-####,
  "friendId": {{$Profile.IntegrationId}},
} satisfies PromotionBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PromotionBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


