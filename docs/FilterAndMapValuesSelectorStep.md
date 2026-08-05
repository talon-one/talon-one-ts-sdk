
# FilterAndMapValuesSelectorStep

Keeps items that exist in the value map, and attaches each kept item\'s mapped value.

## Properties

Name | Type
------------ | -------------
`type` | string
`valueMap` | [SelectorValueMapRef](SelectorValueMapRef.md)

## Example

```typescript
import type { FilterAndMapValuesSelectorStep } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": filterAndMapValues,
  "valueMap": null,
} satisfies FilterAndMapValuesSelectorStep

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FilterAndMapValuesSelectorStep
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


