
# CatalogAction

Definition of all the properties that are needed for a single catalog sync action.

## Properties

Name | Type
------------ | -------------
`type` | string
`payload` | object

## Example

```typescript
import type { CatalogAction } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": ADD,
  "payload": null,
} satisfies CatalogAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


