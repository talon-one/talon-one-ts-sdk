
# Campaign


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`applicationId` | number
`userId` | number
`name` | string
`description` | string
`startTime` | Date
`endTime` | Date
`attributes` | object
`state` | string
`activeRulesetId` | number
`tags` | Array&lt;string&gt;
`features` | Array&lt;string&gt;
`couponSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`referralSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`limits` | [Array&lt;LimitConfig&gt;](LimitConfig.md)
`campaignGroups` | Array&lt;number&gt;
`type` | string
`linkedStoreIds` | Array&lt;number&gt;
`budgets` | [Array&lt;CampaignBudget&gt;](CampaignBudget.md)
`couponRedemptionCount` | number
`referralRedemptionCount` | number
`discountCount` | number
`discountEffectCount` | number
`couponCreationCount` | number
`customEffectCount` | number
`referralCreationCount` | number
`addFreeItemEffectCount` | number
`awardedGiveawaysCount` | number
`createdLoyaltyPointsCount` | number
`createdLoyaltyPointsEffectCount` | number
`redeemedLoyaltyPointsCount` | number
`redeemedLoyaltyPointsEffectCount` | number
`callApiEffectCount` | number
`reservecouponEffectCount` | number
`lastActivity` | Date
`updated` | Date
`createdBy` | string
`updatedBy` | string
`templateId` | number
`frontendState` | string
`storesImported` | boolean
`valueMapsIds` | Array&lt;number&gt;
`revisionFrontendState` | string
`activeRevisionId` | number
`activeRevisionVersionId` | number
`version` | number
`currentRevisionId` | number
`currentRevisionVersionId` | number
`stageRevision` | boolean

## Example

```typescript
import type { Campaign } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 4,
  "created": 2020-06-10T09:05:27.993483Z,
  "applicationId": 322,
  "userId": 388,
  "name": Summer promotions,
  "description": Campaign for all summer 2021 promotions,
  "startTime": 2021-07-20T22:00:00Z,
  "endTime": 2021-09-22T22:00:00Z,
  "attributes": null,
  "state": enabled,
  "activeRulesetId": 6,
  "tags": [summer],
  "features": [coupons, referrals],
  "couponSettings": null,
  "referralSettings": null,
  "limits": null,
  "campaignGroups": [1, 3],
  "type": advanced,
  "linkedStoreIds": [1, 2, 3],
  "budgets": null,
  "couponRedemptionCount": 163,
  "referralRedemptionCount": 3,
  "discountCount": 288,
  "discountEffectCount": 343,
  "couponCreationCount": 16,
  "customEffectCount": 0,
  "referralCreationCount": 8,
  "addFreeItemEffectCount": 0,
  "awardedGiveawaysCount": 9,
  "createdLoyaltyPointsCount": 9,
  "createdLoyaltyPointsEffectCount": 2,
  "redeemedLoyaltyPointsCount": 8,
  "redeemedLoyaltyPointsEffectCount": 9,
  "callApiEffectCount": 0,
  "reservecouponEffectCount": 9,
  "lastActivity": 2022-11-10T23:00:00Z,
  "updated": 2022-10-97T35:00:00Z,
  "createdBy": John Doe,
  "updatedBy": Jane Doe,
  "templateId": 3,
  "frontendState": running,
  "storesImported": true,
  "valueMapsIds": [100, 215],
  "revisionFrontendState": revised,
  "activeRevisionId": 6,
  "activeRevisionVersionId": 6,
  "version": 6,
  "currentRevisionId": 6,
  "currentRevisionVersionId": 6,
  "stageRevision": false,
} satisfies Campaign

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Campaign
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


