
# PrismaticEventPayloadLoyaltyProfileBasedPointsChangedNotification


## Properties

Name | Type
------------ | -------------
`profileIntegrationID` | string
`loyaltyProgramID` | number
`subledgerID` | string
`sourceOfEvent` | string
`employeeName` | string
`userID` | number
`currentPoints` | number
`actions` | [Array&lt;PrismaticEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction&gt;](PrismaticEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction.md)
`publishedAt` | Date

## Example

```typescript
import type { PrismaticEventPayloadLoyaltyProfileBasedPointsChangedNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "profileIntegrationID": null,
  "loyaltyProgramID": null,
  "subledgerID": null,
  "sourceOfEvent": null,
  "employeeName": null,
  "userID": null,
  "currentPoints": null,
  "actions": null,
  "publishedAt": null,
} satisfies PrismaticEventPayloadLoyaltyProfileBasedPointsChangedNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrismaticEventPayloadLoyaltyProfileBasedPointsChangedNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


