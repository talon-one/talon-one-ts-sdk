
# NewCoupons


## Properties

Name | Type
------------ | -------------
`usageLimit` | number
`discountLimit` | number
`reservationLimit` | number
`startDate` | Date
`expiryDate` | Date
`limits` | [Array&lt;LimitConfig&gt;](LimitConfig.md)
`numberOfCoupons` | number
`uniquePrefix` | string
`attributes` | object
`recipientIntegrationId` | string
`validCharacters` | Array&lt;string&gt;
`couponPattern` | string
`isReservationMandatory` | boolean
`implicitlyReserved` | boolean

## Example

```typescript
import type { NewCoupons } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "usageLimit": 100,
  "discountLimit": 30,
  "reservationLimit": 45,
  "startDate": 2020-01-24T14:15:22Z,
  "expiryDate": 2023-08-24T14:15:22Z,
  "limits": null,
  "numberOfCoupons": 1,
  "uniquePrefix": ,
  "attributes": {venueId=12},
  "recipientIntegrationId": URNGV8294NV,
  "validCharacters": [A, B, G, Y],
  "couponPattern": SUMMER-#####,
  "isReservationMandatory": false,
  "implicitlyReserved": false,
} satisfies NewCoupons

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCoupons
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


