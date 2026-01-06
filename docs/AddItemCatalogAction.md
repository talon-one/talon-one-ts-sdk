
# AddItemCatalogAction

The specific properties of the \"ADD\" catalog sync action. 

## Properties

Name | Type
------------ | -------------
`sku` | string
`price` | number
`attributes` | object
`product` | [Product](Product.md)
`replaceIfExists` | boolean

## Example

```typescript
import type { AddItemCatalogAction } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "sku": SKU1241028,
  "price": 99.99,
  "attributes": {"origin":"germany","color":"blue"},
  "product": null,
  "replaceIfExists": false,
} satisfies AddItemCatalogAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddItemCatalogAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


