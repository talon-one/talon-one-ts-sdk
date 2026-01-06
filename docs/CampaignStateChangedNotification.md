
# CampaignStateChangedNotification


## Properties

Name | Type
------------ | -------------
`notificationType` | string
`totalResultSize` | number
`data` | [Array&lt;CampaignStateChangedNotificationItem&gt;](CampaignStateChangedNotificationItem.md)

## Example

```typescript
import type { CampaignStateChangedNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "notificationType": CampaignNotification,
  "totalResultSize": null,
  "data": null,
} satisfies CampaignStateChangedNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignStateChangedNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


