
# IntegrationHubEventPayloadLoyaltyProfileBasedNotification


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
`actions` | [Array&lt;IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction&gt;](IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction.md)
`publishedAt` | Date
`currentTier` | string
`oldTier` | string
`tierExpirationDate` | Date
`timestampOfTierChange` | Date
`pointsRequiredToTheNextTier` | number
`nextTier` | string

## Example

```typescript
import type { IntegrationHubEventPayloadLoyaltyProfileBasedNotification } from 'talon_one_sdk'

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
  "currentTier": null,
  "oldTier": null,
  "tierExpirationDate": null,
  "timestampOfTierChange": null,
  "pointsRequiredToTheNextTier": null,
  "nextTier": null,
} satisfies IntegrationHubEventPayloadLoyaltyProfileBasedNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationHubEventPayloadLoyaltyProfileBasedNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


