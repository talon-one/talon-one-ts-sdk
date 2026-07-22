
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
`expression` | Array&lt;any&gt;
`notificationType` | string
`title` | string
`body` | string
`sku` | string
`name` | string
`quantity` | string
`partial` | boolean
`giveawayPool` | [AwardGiveawayBlock1GiveawayPool](AwardGiveawayBlock1GiveawayPool.md)
`profile` | string
`attribute` | [UpdateAttributeValueBlock1Attribute](UpdateAttributeValueBlock1Attribute.md)
`value` | any
`min` | any
`max` | any
`values` | any
`count` | any
`audience` | [UpdateAudienceMembershipBlock1Audience](UpdateAudienceMembershipBlock1Audience.md)
`redeem` | boolean
`achievement` | [UpdateAchievementProgressBlock1Achievement](UpdateAchievementProgressBlock1Achievement.md)
`target` | [UpdateAttributeValueBlock1Target](UpdateAttributeValueBlock1Target.md)

## Example

```typescript
import type { PromotionBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": setTo,
  "blocks": null,
  "onFailure": null,
  "onError": null,
  "expression": null,
  "notificationType": Info,
  "title": You earned a reward!,
  "body": You saved $10 on your order.,
  "sku": SKU1241028,
  "name": Free Tote Bag,
  "quantity": 1,
  "partial": false,
  "giveawayPool": null,
  "profile": Current,
  "attribute": null,
  "value": null,
  "min": null,
  "max": null,
  "values": null,
  "count": null,
  "audience": null,
  "redeem": true,
  "achievement": null,
  "target": null,
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


