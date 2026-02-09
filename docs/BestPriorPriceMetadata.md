
# BestPriorPriceMetadata

Auxiliary data for found price observation.

## Properties

Name | Type
------------ | -------------
`influencingCampaignDetails` | [Array&lt;InfluencingCampaignDetails&gt;](InfluencingCampaignDetails.md)
`adjustmentDetails` | [AdjustmentDetails](AdjustmentDetails.md)

## Example

```typescript
import type { BestPriorPriceMetadata } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "influencingCampaignDetails": null,
  "adjustmentDetails": null,
} satisfies BestPriorPriceMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BestPriorPriceMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


