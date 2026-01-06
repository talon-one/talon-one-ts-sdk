
# CustomerAnalytics

A summary report of customer activity for a given time range.

## Properties

Name | Type
------------ | -------------
`acceptedCoupons` | number
`createdCoupons` | number
`freeItems` | number
`totalOrders` | number
`totalDiscountedOrders` | number
`totalRevenue` | number
`totalDiscounts` | number

## Example

```typescript
import type { CustomerAnalytics } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "acceptedCoupons": null,
  "createdCoupons": null,
  "freeItems": null,
  "totalOrders": null,
  "totalDiscountedOrders": null,
  "totalRevenue": null,
  "totalDiscounts": null,
} satisfies CustomerAnalytics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerAnalytics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


