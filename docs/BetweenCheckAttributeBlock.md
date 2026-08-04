
# BetweenCheckAttributeBlock

Variant of `CheckAttributeBlock` for the `between` operator, which requires both a minimum and maximum value.

## Properties

Name | Type
------------ | -------------
`operator` | string
`min` | any
`max` | any

## Example

```typescript
import type { BetweenCheckAttributeBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "operator": null,
  "min": null,
  "max": null,
} satisfies BetweenCheckAttributeBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BetweenCheckAttributeBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


