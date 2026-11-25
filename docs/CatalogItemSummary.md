
# CatalogItemSummary


## Properties

Name | Type
------------ | -------------
`id` | number
`catalogId` | number
`sku` | string
`price` | number
`productName` | string
`productId` | number
`skuId` | number

## Example

```typescript
import type { CatalogItemSummary } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "catalogId": 6,
  "sku": SKU1241028,
  "price": 99.99,
  "productName": Running shoes,
  "productId": 12,
  "skuId": 34,
} satisfies CatalogItemSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogItemSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


