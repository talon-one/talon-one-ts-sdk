
# IntegrationHubEventPayloadCouponBasedNotifications


## Properties

Name | Type
------------ | -------------
`eventId` | number
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
`publishedAt` | Date
`sourceOfEvent` | string
`employeeName` | string

## Example

```typescript
import type { IntegrationHubEventPayloadCouponBasedNotifications } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "eventId": 123,
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
  "publishedAt": null,
  "sourceOfEvent": null,
  "employeeName": null,
} satisfies IntegrationHubEventPayloadCouponBasedNotifications

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationHubEventPayloadCouponBasedNotifications
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


