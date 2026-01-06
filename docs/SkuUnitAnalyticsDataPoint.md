
# SkuUnitAnalyticsDataPoint


## Properties

Name | Type
------------ | -------------
`startTime` | Date
`endTime` | Date
`unitsSold` | [AnalyticsDataPointWithTrend](AnalyticsDataPointWithTrend.md)
`sku` | string

## Example

```typescript
import type { SkuUnitAnalyticsDataPoint } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "startTime": 2024-02-01T00:00:00Z,
  "endTime": 2024-02-01T23:59:99Z,
  "unitsSold": null,
  "sku": SKU-123,
} satisfies SkuUnitAnalyticsDataPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SkuUnitAnalyticsDataPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


