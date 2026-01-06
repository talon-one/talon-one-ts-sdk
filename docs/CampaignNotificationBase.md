
# CampaignNotificationBase


## Properties

Name | Type
------------ | -------------
`notificationType` | string
`totalResultSize` | number

## Example

```typescript
import type { CampaignNotificationBase } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "notificationType": CampaignNotification,
  "totalResultSize": null,
} satisfies CampaignNotificationBase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignNotificationBase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


