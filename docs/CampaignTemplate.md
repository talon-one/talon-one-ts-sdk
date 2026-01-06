
# CampaignTemplate


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`accountId` | number
`userId` | number
`name` | string
`description` | string
`instructions` | string
`campaignAttributes` | object
`couponAttributes` | object
`state` | string
`activeRulesetId` | number
`tags` | Array&lt;string&gt;
`features` | Array&lt;string&gt;
`couponSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`couponReservationSettings` | [CampaignTemplateCouponReservationSettings](CampaignTemplateCouponReservationSettings.md)
`referralSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`limits` | [Array&lt;TemplateLimitConfig&gt;](TemplateLimitConfig.md)
`templateParams` | [Array&lt;CampaignTemplateParams&gt;](CampaignTemplateParams.md)
`applicationsIds` | Array&lt;number&gt;
`campaignCollections` | [Array&lt;CampaignTemplateCollection&gt;](CampaignTemplateCollection.md)
`defaultCampaignGroupId` | number
`campaignType` | string
`campaignsCount` | number
`updated` | Date
`updatedBy` | string
`validApplicationIds` | Array&lt;number&gt;
`isUserFavorite` | boolean

## Example

```typescript
import type { CampaignTemplate } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "accountId": 3886,
  "userId": 388,
  "name": Discount campaign,
  "description": This is a template for a discount campaign.,
  "instructions": Use this template for discount campaigns. Set the campaign properties according to the campaign goals, and don't forget to set an end date.,
  "campaignAttributes": null,
  "couponAttributes": null,
  "state": null,
  "activeRulesetId": 5,
  "tags": [discount],
  "features": null,
  "couponSettings": null,
  "couponReservationSettings": null,
  "referralSettings": null,
  "limits": null,
  "templateParams": null,
  "applicationsIds": [1, 2, 3],
  "campaignCollections": null,
  "defaultCampaignGroupId": 42,
  "campaignType": advanced,
  "campaignsCount": 3,
  "updated": 2022-08-24T14:15:22Z,
  "updatedBy": Jane Doe,
  "validApplicationIds": [1, 2, 3],
  "isUserFavorite": false,
} satisfies CampaignTemplate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignTemplate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


