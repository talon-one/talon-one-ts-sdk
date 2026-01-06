
# AnalyticsDataPointWithTrendAndInfluencedRate


## Properties

Name | Type
------------ | -------------
`value` | number
`influencedRate` | number
`trend` | number

## Example

```typescript
import type { AnalyticsDataPointWithTrendAndInfluencedRate } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": 12,
  "influencedRate": 12,
  "trend": 3.25,
} satisfies AnalyticsDataPointWithTrendAndInfluencedRate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyticsDataPointWithTrendAndInfluencedRate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


