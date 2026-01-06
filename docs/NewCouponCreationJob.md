
# NewCouponCreationJob


## Properties

Name | Type
------------ | -------------
`usageLimit` | number
`discountLimit` | number
`reservationLimit` | number
`startDate` | Date
`expiryDate` | Date
`numberOfCoupons` | number
`couponSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`attributes` | object

## Example

```typescript
import type { NewCouponCreationJob } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "usageLimit": 100,
  "discountLimit": 30,
  "reservationLimit": 45,
  "startDate": 2020-01-24T14:15:22Z,
  "expiryDate": 2023-08-24T14:15:22Z,
  "numberOfCoupons": 200000,
  "couponSettings": null,
  "attributes": null,
} satisfies NewCouponCreationJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCouponCreationJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


