
# ExperimentVariantAllocation


## Properties

Name | Type
------------ | -------------
`experimentID` | number
`variantID` | number

## Example

```typescript
import type { ExperimentVariantAllocation } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "experimentID": 1,
  "variantID": 2,
} satisfies ExperimentVariantAllocation

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExperimentVariantAllocation
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


