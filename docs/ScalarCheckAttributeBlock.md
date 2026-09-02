
# ScalarCheckAttributeBlock

Variant of `CheckAttributeBlock` for operators that compare an attribute against a single value.

## Properties

Name | Type
------------ | -------------
`operator` | string
`value` | any

## Example

```typescript
import type { ScalarCheckAttributeBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "operator": null,
  "value": 100,
} satisfies ScalarCheckAttributeBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScalarCheckAttributeBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


