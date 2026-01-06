
# NotificationListItem


## Properties

Name | Type
------------ | -------------
`notificationId` | number
`notificationName` | string
`entityId` | number
`enabled` | boolean

## Example

```typescript
import type { NotificationListItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "notificationId": 1,
  "notificationName": My campaign notification,
  "entityId": 1,
  "enabled": true,
} satisfies NotificationListItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NotificationListItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


