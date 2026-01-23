
# PrismaticEventPayloadCouponBasedNotifications


## Properties

Name | Type
------------ | -------------
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
`limits` | [Array&lt;PrismaticEventPayloadCouponBasedNotificationsLimits&gt;](PrismaticEventPayloadCouponBasedNotificationsLimits.md)
`sourceOfEvent` | string
`employeeName` | string

## Example

```typescript
import type { PrismaticEventPayloadCouponBasedNotifications } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
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
  "sourceOfEvent": null,
  "employeeName": null,
} satisfies PrismaticEventPayloadCouponBasedNotifications

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrismaticEventPayloadCouponBasedNotifications
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


