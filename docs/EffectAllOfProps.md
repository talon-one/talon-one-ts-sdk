
# EffectAllOfProps


## Properties

Name | Type
------------ | -------------
`value` | number
`id` | number
`rejectionReason` | string
`conditionIndex` | number
`effectIndex` | number
`details` | string
`campaignExclusionReason` | string
`profileId` | number
`name` | string
`scope` | string
`desiredValue` | number
`position` | number
`subPosition` | number
`totalDiscount` | number
`desiredTotalDiscount` | number
`bundleIndex` | number
`bundleName` | string
`targetedItemPosition` | number
`targetedItemSubPosition` | number
`excludedFromPriceHistory` | boolean
`additionalCostId` | number
`additionalCost` | string
`webhookId` | number
`webhookName` | string
`programId` | number
`subLedgerId` | string
`recipientIntegrationId` | string
`startDate` | Date
`expiryDate` | Date
`transactionUUID` | string
`cartItemPosition` | number
`cartItemSubPosition` | number
`cardIdentifier` | string
`awaitsActivation` | boolean
`validityDuration` | string
`ruleTitle` | string
`previousTierName` | string
`newTierName` | string
`sku` | string
`desiredQuantity` | number
`notificationType` | string
`title` | string
`body` | string
`path` | string
`description` | string
`bundleAttributes` | Array&lt;string&gt;
`itemsIndices` | Array&lt;number&gt;
`poolId` | number
`poolName` | string
`giveawayId` | number
`code` | string
`message` | string
`effectId` | number
`payload` | object
`couponValue` | string
`profileIntegrationId` | string
`isNewReservation` | boolean
`audienceId` | number
`audienceName` | string
`achievementId` | number
`achievementName` | string
`progressTrackerId` | number
`delta` | number
`target` | number
`isJustCompleted` | boolean
`decreaseProgressBy` | number
`currentProgress` | number
`extensionDuration` | string
`affectedTransactions` | [Array&lt;LoyaltyLedgerEntryExpiryDateChange&gt;](LoyaltyLedgerEntryExpiryDateChange.md)
`newExpiryDate` | Date

## Example

```typescript
import type { EffectAllOfProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
  "id": null,
  "rejectionReason": null,
  "conditionIndex": null,
  "effectIndex": null,
  "details": null,
  "campaignExclusionReason": CampaignGaveLowerDiscount,
  "profileId": 150,
  "name": null,
  "scope": null,
  "desiredValue": null,
  "position": null,
  "subPosition": null,
  "totalDiscount": null,
  "desiredTotalDiscount": null,
  "bundleIndex": 1,
  "bundleName": my_bundle,
  "targetedItemPosition": null,
  "targetedItemSubPosition": null,
  "excludedFromPriceHistory": null,
  "additionalCostId": null,
  "additionalCost": null,
  "webhookId": null,
  "webhookName": null,
  "programId": null,
  "subLedgerId": null,
  "recipientIntegrationId": URNGV8294NV,
  "startDate": null,
  "expiryDate": null,
  "transactionUUID": null,
  "cartItemPosition": 1,
  "cartItemSubPosition": 2,
  "cardIdentifier": summer-loyalty-card-0543,
  "awaitsActivation": null,
  "validityDuration": null,
  "ruleTitle": null,
  "previousTierName": null,
  "newTierName": null,
  "sku": SKU1241028,
  "desiredQuantity": null,
  "notificationType": null,
  "title": null,
  "body": null,
  "path": null,
  "description": null,
  "bundleAttributes": null,
  "itemsIndices": null,
  "poolId": 2,
  "poolName": My pool,
  "giveawayId": 5,
  "code": 57638t-67439hty,
  "message": null,
  "effectId": 1,
  "payload": null,
  "couponValue": null,
  "profileIntegrationId": URNGV8294NV,
  "isNewReservation": null,
  "audienceId": 10,
  "audienceName": My audience,
  "achievementId": 10,
  "achievementName": FreeCoffee10Orders,
  "progressTrackerId": null,
  "delta": null,
  "target": null,
  "isJustCompleted": null,
  "decreaseProgressBy": null,
  "currentProgress": null,
  "extensionDuration": 12h,
  "affectedTransactions": null,
  "newExpiryDate": 2024-07-24T14:15:22Z,
} satisfies EffectAllOfProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EffectAllOfProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


