
# ExperimentSegmentInsightMetric


## Properties

Name | Type
------------ | -------------
`metric` | string
`segments` | [Array&lt;ExperimentSegmentInsight&gt;](ExperimentSegmentInsight.md)

## Example

```typescript
import type { ExperimentSegmentInsightMetric } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "metric": avg_session_value,
  "segments": null,
} satisfies ExperimentSegmentInsightMetric

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExperimentSegmentInsightMetric
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


