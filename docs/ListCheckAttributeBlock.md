
# ListCheckAttributeBlock

Variant of `CheckAttributeBlock` for operators that test list membership against a set of values.

## Properties

Name | Type
------------ | -------------
`operator` | string
`values` | any

## Example

```typescript
import type { ListCheckAttributeBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "operator": null,
  "values": null,
} satisfies ListCheckAttributeBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListCheckAttributeBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


