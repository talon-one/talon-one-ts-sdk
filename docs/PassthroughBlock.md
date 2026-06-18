
# PassthroughBlock

A block representing a Talang expression that could not be mapped to a typed block. The expression is preserved in its raw Talang array form for diagnostic and round-trip purposes.

## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`expression` | Array&lt;any&gt;

## Example

```typescript
import type { PassthroughBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "expression": null,
} satisfies PassthroughBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PassthroughBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


