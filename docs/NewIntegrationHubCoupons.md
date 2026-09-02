
# NewIntegrationHubCoupons


## Properties

Name | Type
------------ | -------------
`usageLimit` | number
`discountLimit` | number
`reservationLimit` | number
`startDate` | Date
`expiryDate` | Date
`limits` | [Array&lt;LimitConfig&gt;](LimitConfig.md)
`applicationId` | number
`campaignId` | number
`batchId` | string
`numberOfCoupons` | number
`attributes` | object
`validCharacters` | Array&lt;string&gt;
`couponPattern` | string
`isReservationMandatory` | boolean
`implicitlyReserved` | boolean
`recipientIntegrationId` | string
`supportRequestId` | number
`supportRequestNote` | string

## Example

```typescript
import type { NewIntegrationHubCoupons } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "usageLimit": 100,
  "discountLimit": 30,
  "reservationLimit": 45,
  "startDate": 2020-01-24T14:15:22Z,
  "expiryDate": 2023-08-24T14:15:22Z,
  "limits": null,
  "applicationId": 1,
  "campaignId": 1,
  "batchId": abcdef123,
  "numberOfCoupons": 100,
  "attributes": {"campaignSource":"cep-integration"},
  "validCharacters": ["A","B","C"],
  "couponPattern": CEP-####-####,
  "isReservationMandatory": false,
  "implicitlyReserved": false,
  "recipientIntegrationId": URNGV8294NV,
  "supportRequestId": 42,
  "supportRequestNote": Approved as compensation for the delayed order.,
} satisfies NewIntegrationHubCoupons

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewIntegrationHubCoupons
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


