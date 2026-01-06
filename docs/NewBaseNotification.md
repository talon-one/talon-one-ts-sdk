
# NewBaseNotification


## Properties

Name | Type
------------ | -------------
`policy` | object
`enabled` | boolean
`webhook` | [NewNotificationWebhook](NewNotificationWebhook.md)

## Example

```typescript
import type { NewBaseNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "policy": null,
  "enabled": null,
  "webhook": null,
} satisfies NewBaseNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewBaseNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


