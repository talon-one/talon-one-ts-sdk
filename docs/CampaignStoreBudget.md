
# CampaignStoreBudget


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`campaignId` | number
`storeId` | number
`limits` | [Array&lt;CampaignStoreBudgetLimitConfig&gt;](CampaignStoreBudgetLimitConfig.md)

## Example

```typescript
import type { CampaignStoreBudget } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "campaignId": 322,
  "storeId": null,
  "limits": null,
} satisfies CampaignStoreBudget

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignStoreBudget
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


