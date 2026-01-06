
# UpdateCampaignTemplate


## Properties

Name | Type
------------ | -------------
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

## Example

```typescript
import type { UpdateCampaignTemplate } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
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
} satisfies UpdateCampaignTemplate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCampaignTemplate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


