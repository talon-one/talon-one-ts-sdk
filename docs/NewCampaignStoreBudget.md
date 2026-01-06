
# NewCampaignStoreBudget


## Properties

Name | Type
------------ | -------------
`action` | string
`storeLimits` | [Array&lt;NewCampaignStoreBudgetStoreLimit&gt;](NewCampaignStoreBudgetStoreLimit.md)
`period` | string

## Example

```typescript
import type { NewCampaignStoreBudget } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "action": null,
  "storeLimits": null,
  "period": null,
} satisfies NewCampaignStoreBudget

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCampaignStoreBudget
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


