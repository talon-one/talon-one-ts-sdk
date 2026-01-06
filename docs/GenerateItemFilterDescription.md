
# GenerateItemFilterDescription


## Properties

Name | Type
------------ | -------------
`itemFilter` | Array&lt;object&gt;

## Example

```typescript
import type { GenerateItemFilterDescription } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "itemFilter": ["filter",[".","Session","CartItems"],[["Item"],["catch",false,["and",["!=",[".","Item","Attributes","c_productType"],"egiftcard"]]]]],
} satisfies GenerateItemFilterDescription

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateItemFilterDescription
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


