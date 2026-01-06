
# CreateTemplateCampaign


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`templateId` | number
`campaignAttributesOverrides` | object
`templateParamValues` | [Array&lt;Binding&gt;](Binding.md)
`limitOverrides` | [Array&lt;LimitConfig&gt;](LimitConfig.md)
`campaignGroups` | Array&lt;number&gt;
`tags` | Array&lt;string&gt;
`evaluationGroupId` | number
`linkedStoreIds` | Array&lt;number&gt;

## Example

```typescript
import type { CreateTemplateCampaign } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Discount campaign,
  "description": This template is for discount campaigns.,
  "templateId": 4,
  "campaignAttributesOverrides": null,
  "templateParamValues": null,
  "limitOverrides": null,
  "campaignGroups": [1, 3],
  "tags": [summer],
  "evaluationGroupId": 2,
  "linkedStoreIds": [1, 2, 3],
} satisfies CreateTemplateCampaign

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTemplateCampaign
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


