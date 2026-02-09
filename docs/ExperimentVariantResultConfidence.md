
# ExperimentVariantResultConfidence


## Properties

Name | Type
------------ | -------------
`avgSessionValue` | number
`avgDiscountedSessionValue` | number
`avgItemsPerSession` | number

## Example

```typescript
import type { ExperimentVariantResultConfidence } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "avgSessionValue": 100,
  "avgDiscountedSessionValue": 100,
  "avgItemsPerSession": 100,
} satisfies ExperimentVariantResultConfidence

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExperimentVariantResultConfidence
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


