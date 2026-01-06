
# ExtendedCoupon


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
`limits` | [Array&lt;LimitConfig&gt;](LimitConfig.md)
`usageCounter` | number
`discountCounter` | number
`discountRemainder` | number
`reservationCounter` | number
`attributes` | object
`referralId` | number
`recipientIntegrationId` | string
`importId` | number
`reservation` | boolean
`batchId` | string
`isReservationMandatory` | boolean
`implicitlyReserved` | boolean
`applicationId` | number

## Example

```typescript
import type { ExtendedCoupon } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "campaignId": 211,
  "value": XMAS-20-2021,
  "usageLimit": 100,
  "discountLimit": 30,
  "reservationLimit": 45,
  "startDate": 2020-01-24T14:15:22Z,
  "expiryDate": 2023-08-24T14:15:22Z,
  "limits": null,
  "usageCounter": 10,
  "discountCounter": 10,
  "discountRemainder": 5,
  "reservationCounter": 1,
  "attributes": null,
  "referralId": 326632952,
  "recipientIntegrationId": URNGV8294NV,
  "importId": 4,
  "reservation": false,
  "batchId": 32535-43255,
  "isReservationMandatory": false,
  "implicitlyReserved": false,
  "applicationId": null,
} satisfies ExtendedCoupon

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExtendedCoupon
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


