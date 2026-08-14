
# CatalogActionAddPriceAdjustment

Adds price adjustments to an item of the catalog.

## Properties

Name | Type
------------ | -------------
`type` | string
`payload` | [AddPriceAdjustmentCatalogAction](AddPriceAdjustmentCatalogAction.md)

## Example

```typescript
import type { CatalogActionAddPriceAdjustment } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "payload": null,
} satisfies CatalogActionAddPriceAdjustment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogActionAddPriceAdjustment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


