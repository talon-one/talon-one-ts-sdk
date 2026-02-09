
# InfluencingCampaignDetails

Details about a campaign that influenced the final price.

## Properties

Name | Type
------------ | -------------
`campaignId` | number
`discountValue` | number

## Example

```typescript
import type { InfluencingCampaignDetails } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignId": null,
  "discountValue": null,
} satisfies InfluencingCampaignDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InfluencingCampaignDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


