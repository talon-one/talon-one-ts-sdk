
# CardExpiringPointsNotificationPolicy


## Properties

Name | Type
------------ | -------------
`name` | string
`triggers` | [Array&lt;CardExpiringPointsNotificationTrigger&gt;](CardExpiringPointsNotificationTrigger.md)
`batchingEnabled` | boolean
`batchSize` | number

## Example

```typescript
import type { CardExpiringPointsNotificationPolicy } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Notification to Google,
  "triggers": null,
  "batchingEnabled": true,
  "batchSize": 1000,
} satisfies CardExpiringPointsNotificationPolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CardExpiringPointsNotificationPolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


