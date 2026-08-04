
# ListWithCountCheckAttributeBlock

Variant of `CheckAttributeBlock` for operators that test list membership with a minimum or exact count threshold.

## Properties

Name | Type
------------ | -------------
`operator` | string
`values` | any
`count` | any

## Example

```typescript
import type { ListWithCountCheckAttributeBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "operator": null,
  "values": null,
  "count": null,
} satisfies ListWithCountCheckAttributeBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListWithCountCheckAttributeBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


