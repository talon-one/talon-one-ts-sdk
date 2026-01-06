
# GenerateCampaignDescription


## Properties

Name | Type
------------ | -------------
`campaignID` | number
`rulesetID` | number
`currency` | string

## Example

```typescript
import type { GenerateCampaignDescription } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignID": null,
  "rulesetID": null,
  "currency": null,
} satisfies GenerateCampaignDescription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateCampaignDescription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


