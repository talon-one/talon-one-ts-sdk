
# NewCampaignTemplate


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`instructions` | string
`campaignAttributes` | object
`couponAttributes` | object
`state` | string
`tags` | Array&lt;string&gt;
`reevaluateOnReturn` | boolean
`features` | Array&lt;string&gt;
`couponSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`couponReservationSettings` | [CampaignTemplateCouponReservationSettings](CampaignTemplateCouponReservationSettings.md)
`referralSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`limits` | [Array&lt;TemplateLimitConfig&gt;](TemplateLimitConfig.md)
`templateParams` | [Array&lt;CampaignTemplateParams&gt;](CampaignTemplateParams.md)
`campaignCollections` | [Array&lt;CampaignTemplateCollection&gt;](CampaignTemplateCollection.md)
`defaultCampaignGroupId` | number
`campaignType` | string

## Example

```typescript
import type { NewCampaignTemplate } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "description": null,
  "instructions": null,
  "campaignAttributes": null,
  "couponAttributes": null,
  "state": null,
  "tags": null,
  "reevaluateOnReturn": true,
  "features": null,
  "couponSettings": null,
  "couponReservationSettings": null,
  "referralSettings": null,
  "limits": null,
  "templateParams": null,
  "campaignCollections": null,
  "defaultCampaignGroupId": 42,
  "campaignType": advanced,
} satisfies NewCampaignTemplate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCampaignTemplate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


