
# PatchItemCatalogAction

The specific properties of the \"PATCH\" catalog sync action.  **Note:**   - If you do not provide a new `price` value, the existing `price` value is retained.   - If you do not provide a new `product` value, the `product` value is set to `null`. 

## Properties

Name | Type
------------ | -------------
`sku` | string
`price` | number
`attributes` | object
`product` | [Product](Product.md)
`createIfNotExists` | boolean

## Example

```typescript
import type { PatchItemCatalogAction } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "sku": null,
  "price": 99.99,
  "attributes": null,
  "product": null,
  "createIfNotExists": null,
} satisfies PatchItemCatalogAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PatchItemCatalogAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


