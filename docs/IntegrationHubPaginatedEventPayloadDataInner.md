
# IntegrationHubPaginatedEventPayloadDataInner


## Properties

Name | Type
------------ | -------------
`eventId` | number
`profileIntegrationID` | string
`loyaltyProgramID` | number
`loyaltyProgramName` | string
`subledgerID` | string
`sourceOfEvent` | string
`currentTier` | string
`sessionIntegrationID` | string
`employeeName` | string
`userID` | number
`currentPoints` | number
`actions` | [Array&lt;IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction&gt;](IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction.md)
`publishedAt` | Date
`oldTier` | string
`tierExpirationDate` | Date
`timestampOfTierChange` | Date
`pointsRequiredToTheNextTier` | number
`nextTier` | string
`id` | number
`created` | Date
`campaignId` | number
`value` | string
`usageLimit` | number
`discountLimit` | number
`reservationLimit` | number
`startDate` | Date
`expiryDate` | Date
`usageCounter` | number
`discountCounter` | number
`discountRemainder` | number
`referralId` | number
`recipientIntegrationId` | string
`importId` | number
`batchId` | string
`attributes` | object
`limits` | [Array&lt;IntegrationHubEventPayloadCouponBasedNotificationsLimits&gt;](IntegrationHubEventPayloadCouponBasedNotificationsLimits.md)

## Example

```typescript
import type { IntegrationHubPaginatedEventPayloadDataInner } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "eventId": 123,
  "profileIntegrationID": null,
  "loyaltyProgramID": null,
  "loyaltyProgramName": null,
  "subledgerID": null,
  "sourceOfEvent": null,
  "currentTier": null,
  "sessionIntegrationID": null,
  "employeeName": null,
  "userID": null,
  "currentPoints": null,
  "actions": null,
  "publishedAt": null,
  "oldTier": null,
  "tierExpirationDate": null,
  "timestampOfTierChange": null,
  "pointsRequiredToTheNextTier": null,
  "nextTier": null,
  "id": null,
  "created": null,
  "campaignId": null,
  "value": null,
  "usageLimit": null,
  "discountLimit": null,
  "reservationLimit": null,
  "startDate": null,
  "expiryDate": null,
  "usageCounter": null,
  "discountCounter": null,
  "discountRemainder": null,
  "referralId": null,
  "recipientIntegrationId": null,
  "importId": null,
  "batchId": null,
  "attributes": null,
  "limits": null,
} satisfies IntegrationHubPaginatedEventPayloadDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationHubPaginatedEventPayloadDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


