
# UnaryCheckAttributeBlock

Variant of `CheckAttributeBlock` for operators that test a property of the attribute itself with no comparison value.

## Properties

Name | Type
------------ | -------------
`operator` | string

## Example

```typescript
import type { UnaryCheckAttributeBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "operator": null,
} satisfies UnaryCheckAttributeBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnaryCheckAttributeBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


