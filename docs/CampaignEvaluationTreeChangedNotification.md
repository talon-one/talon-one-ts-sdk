
# CampaignEvaluationTreeChangedNotification


## Properties

Name | Type
------------ | -------------
`notificationType` | string
`totalResultSize` | number
`data` | [Array&lt;CampaignEvaluationTreeChangedNotificationData&gt;](CampaignEvaluationTreeChangedNotificationData.md)

## Example

```typescript
import type { CampaignEvaluationTreeChangedNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "notificationType": CampaignEvaluationTreeChanged,
  "totalResultSize": null,
  "data": null,
} satisfies CampaignEvaluationTreeChangedNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignEvaluationTreeChangedNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


