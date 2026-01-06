
# BaseCampaign


## Properties

Name | Type
------------ | -------------
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

## Example

```typescript
import type { BaseCampaign } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
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
} satisfies BaseCampaign

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BaseCampaign
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


