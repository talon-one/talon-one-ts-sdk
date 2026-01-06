
# CouponCreationJob


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`campaignId` | number
`applicationId` | number
`accountId` | number
`usageLimit` | number
`discountLimit` | number
`reservationLimit` | number
`startDate` | Date
`expiryDate` | Date
`numberOfCoupons` | number
`couponSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`attributes` | object
`batchId` | string
`status` | string
`createdAmount` | number
`failCount` | number
`errors` | Array&lt;string&gt;
`createdBy` | number
`communicated` | boolean
`chunkExecutionCount` | number
`chunkSize` | number

## Example

```typescript
import type { CouponCreationJob } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "campaignId": 211,
  "applicationId": 322,
  "accountId": 3886,
  "usageLimit": 100,
  "discountLimit": 30,
  "reservationLimit": 45,
  "startDate": 2020-01-24T14:15:22Z,
  "expiryDate": 2023-08-24T14:15:22Z,
  "numberOfCoupons": 200000,
  "couponSettings": null,
  "attributes": null,
  "batchId": tqyrgahe,
  "status": pending,
  "createdAmount": 1000000,
  "failCount": 10,
  "errors": ["Connection to database was reset","failed to generate enough unique codes","attribute 'PizzaLover' not found on entity 'Coupons'"],
  "createdBy": 1,
  "communicated": false,
  "chunkExecutionCount": 0,
  "chunkSize": 20000,
} satisfies CouponCreationJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponCreationJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


