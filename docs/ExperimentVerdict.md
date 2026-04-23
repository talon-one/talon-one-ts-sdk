
# ExperimentVerdict


## Properties

Name | Type
------------ | -------------
`winnerVariantName` | string
`verdictSummary` | string
`keyFindings` | Array&lt;string&gt;
`aiConfidenceLevel` | string
`recommendation` | string

## Example

```typescript
import type { ExperimentVerdict } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "winnerVariantName": null,
  "verdictSummary": null,
  "keyFindings": null,
  "aiConfidenceLevel": null,
  "recommendation": null,
} satisfies ExperimentVerdict

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExperimentVerdict
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


