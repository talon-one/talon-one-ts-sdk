
# AnalyticsSKU


## Properties

Name | Type
------------ | -------------
`id` | number
`sku` | string
`lastUpdated` | Date
`catalogId` | number
`productId` | number
`unitsSold` | [AnalyticsDataPointWithTrend](AnalyticsDataPointWithTrend.md)

## Example

```typescript
import type { AnalyticsSKU } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "sku": SKU-123,
  "lastUpdated": 2024-02-01T00:00:00Z,
  "catalogId": 1,
  "productId": 1,
  "unitsSold": null,
} satisfies AnalyticsSKU

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyticsSKU
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


