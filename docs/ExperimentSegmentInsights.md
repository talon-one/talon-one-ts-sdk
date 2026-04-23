
# ExperimentSegmentInsights


## Properties

Name | Type
------------ | -------------
`metrics` | [Array&lt;ExperimentSegmentInsightMetric&gt;](ExperimentSegmentInsightMetric.md)
`totalSegmentsTested` | number
`dimensionsTested` | number
`reason` | string

## Example

```typescript
import type { ExperimentSegmentInsights } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "metrics": null,
  "totalSegmentsTested": 24,
  "dimensionsTested": 3,
  "reason": ,
} satisfies ExperimentSegmentInsights

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExperimentSegmentInsights
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


