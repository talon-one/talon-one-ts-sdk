
# CampaignLoyaltyProgram

A loyalty program referenced in a campaign.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`tiers` | Array&lt;string&gt;
`cardBased` | boolean

## Example

```typescript
import type { CampaignLoyaltyProgram } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 5,
  "name": My program,
  "tiers": ["Silver","Gold","Platinum"],
  "cardBased": false,
} satisfies CampaignLoyaltyProgram

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignLoyaltyProgram
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


