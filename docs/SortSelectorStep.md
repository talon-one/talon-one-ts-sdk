
# SortSelectorStep

Sorts items by one or more field expressions.

## Properties

Name | Type
------------ | -------------
`type` | string
`fields` | [Array&lt;SortSelectorStepField&gt;](SortSelectorStepField.md)

## Example

```typescript
import type { SortSelectorStep } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": sort,
  "fields": null,
} satisfies SortSelectorStep

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SortSelectorStep
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


