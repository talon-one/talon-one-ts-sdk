
# CustomerActivityReport

A summary report of customer activity for a given time range.

## Properties

Name | Type
------------ | -------------
`integrationId` | string
`created` | Date
`name` | string
`customerId` | number
`lastActivity` | Date
`couponRedemptions` | number
`couponUseAttempts` | number
`couponFailedAttempts` | number
`accruedDiscounts` | number
`accruedRevenue` | number
`totalOrders` | number
`totalOrdersNoCoupon` | number
`campaignName` | string

## Example

```typescript
import type { CustomerActivityReport } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "integrationId": URNGV8294NV,
  "created": 2020-02-07T08:15:22Z,
  "name": null,
  "customerId": null,
  "lastActivity": null,
  "couponRedemptions": null,
  "couponUseAttempts": null,
  "couponFailedAttempts": null,
  "accruedDiscounts": null,
  "accruedRevenue": null,
  "totalOrders": null,
  "totalOrdersNoCoupon": null,
  "campaignName": null,
} satisfies CustomerActivityReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerActivityReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


