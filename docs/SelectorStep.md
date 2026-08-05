
# SelectorStep

A single step in a selector item pipeline. The `type` field determines the step variant.

## Properties

Name | Type
------------ | -------------
`type` | string
`predicate` | [SelectorBlock](SelectorBlock.md)
`fields` | [Array&lt;SortSelectorStepField&gt;](SortSelectorStepField.md)
`operator` | string
`from` | [SelectSelectorStepFrom](SelectSelectorStepFrom.md)
`to` | number
`count` | number
`index` | number
`partial` | boolean
`expression` | string
`valueMap` | [SelectorValueMapRef](SelectorValueMapRef.md)

## Example

```typescript
import type { SelectorStep } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": filter,
  "predicate": null,
  "fields": null,
  "operator": sum,
  "from": null,
  "to": 7,
  "count": 5,
  "index": 0,
  "partial": true,
  "expression": $Item.Price,
  "valueMap": null,
} satisfies SelectorStep

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SelectorStep
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


