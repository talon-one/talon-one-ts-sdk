
# CampaignEligibilityExperiment

The identifiers for the [experiment](https://docs.talon.one/management-api#tag/Experiments) and the variant assigned to the customer profile. Only returned when the customer profile has been assigned to a variant in an experiment campaign. 

## Properties

Name | Type
------------ | -------------
`id` | number
`variantId` | number

## Example

```typescript
import type { CampaignEligibilityExperiment } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "variantId": null,
} satisfies CampaignEligibilityExperiment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignEligibilityExperiment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


