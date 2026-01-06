
# CatalogActionFilter

The properties for a single filtering condition in a catalog sync action.

## Properties

Name | Type
------------ | -------------
`attr` | string
`op` | string
`value` | any

## Example

```typescript
import type { CatalogActionFilter } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "attr": null,
  "op": null,
  "value": null,
} satisfies CatalogActionFilter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogActionFilter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


