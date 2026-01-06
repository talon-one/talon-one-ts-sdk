
# CatalogItem


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`sku` | string
`price` | number
`catalogid` | number
`version` | number
`attributes` | [Array&lt;ItemAttribute&gt;](ItemAttribute.md)
`product` | [Product](Product.md)

## Example

```typescript
import type { CatalogItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "sku": SKU1241028,
  "price": 99.99,
  "catalogid": 6,
  "version": 5,
  "attributes": null,
  "product": null,
} satisfies CatalogItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


