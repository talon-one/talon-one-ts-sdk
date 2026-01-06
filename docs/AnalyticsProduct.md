
# AnalyticsProduct


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`catalogId` | number
`unitsSold` | [AnalyticsDataPointWithTrend](AnalyticsDataPointWithTrend.md)

## Example

```typescript
import type { AnalyticsProduct } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "name": MyProduct,
  "catalogId": 1,
  "unitsSold": null,
} satisfies AnalyticsProduct

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyticsProduct
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


