
# CatalogActionPatch

Updates an item in the catalog.

## Properties

Name | Type
------------ | -------------
`type` | string
`payload` | [PatchItemCatalogAction](PatchItemCatalogAction.md)

## Example

```typescript
import type { CatalogActionPatch } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "payload": null,
} satisfies CatalogActionPatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogActionPatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


