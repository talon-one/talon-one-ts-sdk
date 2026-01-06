
# PatchManyItemsCatalogAction

The specific properties of the \"PATCH_MANY\" catalog sync action.

## Properties

Name | Type
------------ | -------------
`price` | number
`filters` | [Array&lt;CatalogActionFilter&gt;](CatalogActionFilter.md)
`attributes` | object

## Example

```typescript
import type { PatchManyItemsCatalogAction } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "price": 99.99,
  "filters": null,
  "attributes": null,
} satisfies PatchManyItemsCatalogAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PatchManyItemsCatalogAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


