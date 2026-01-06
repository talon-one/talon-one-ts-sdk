
# ExpiringPointsNotificationPolicy


## Properties

Name | Type
------------ | -------------
`name` | string
`triggers` | [Array&lt;ExpiringPointsNotificationTrigger&gt;](ExpiringPointsNotificationTrigger.md)
`batchingEnabled` | boolean
`batchSize` | number

## Example

```typescript
import type { ExpiringPointsNotificationPolicy } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Notification to Google,
  "triggers": null,
  "batchingEnabled": true,
  "batchSize": 1000,
} satisfies ExpiringPointsNotificationPolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExpiringPointsNotificationPolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


