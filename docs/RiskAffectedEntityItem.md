
# RiskAffectedEntityItem

A single entity flagged as anomalous within a risk.

## Properties

Name | Type
------------ | -------------
`entityId` | string
`activityValue` | number
`threshold` | number
`severityRatio` | number
`criticality` | string

## Example

```typescript
import type { RiskAffectedEntityItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "entityId": 174165415,
  "activityValue": 2898.2,
  "threshold": 60,
  "severityRatio": 48.3,
  "criticality": critical,
} satisfies RiskAffectedEntityItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskAffectedEntityItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


