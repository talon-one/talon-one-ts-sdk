
# AdditionalCampaignProperties


## Properties

Name | Type
------------ | -------------
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

## Example

```typescript
import type { AdditionalCampaignProperties } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
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
} satisfies AdditionalCampaignProperties

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdditionalCampaignProperties
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


