
# CouponsNotificationData


## Properties

Name | Type
------------ | -------------
`typeOfChange` | string
`operation` | string
`employeeName` | string
`data` | [Array&lt;ExtendedCoupon&gt;](ExtendedCoupon.md)
`totalResultSize` | number
`notificationType` | string

## Example

```typescript
import type { CouponsNotificationData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "typeOfChange": campaign_manager,
  "operation": CouponUpdated,
  "employeeName": Franziska Schneider,
  "data": null,
  "totalResultSize": 1,
  "notificationType": CouponUpdated,
} satisfies CouponsNotificationData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponsNotificationData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


