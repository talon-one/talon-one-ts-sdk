
# CampaignCreatedNotificationItem


## Properties

Name | Type
------------ | -------------
`event` | string
`campaign` | any
`ruleset` | any
`evaluationPosition` | any

## Example

```typescript
import type { CampaignCreatedNotificationItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "event": campaign_state_changed,
  "campaign": null,
  "ruleset": null,
  "evaluationPosition": null,
} satisfies CampaignCreatedNotificationItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignCreatedNotificationItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


