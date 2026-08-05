
# SortSelectorStepField


## Properties

Name | Type
------------ | -------------
`expression` | string
`direction` | string

## Example

```typescript
import type { SortSelectorStepField } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "expression": $Item.Price,
  "direction": asc,
} satisfies SortSelectorStepField

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SortSelectorStepField
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


