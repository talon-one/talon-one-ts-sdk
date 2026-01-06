
# PriceTypeReferences


## Properties

Name | Type
------------ | -------------
`priceTypeId` | number
`references` | [Array&lt;PriceTypeReferenceDetail&gt;](PriceTypeReferenceDetail.md)

## Example

```typescript
import type { PriceTypeReferences } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "priceTypeId": 6,
  "references": null,
} satisfies PriceTypeReferences

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceTypeReferences
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


