
# NewCollectionsCatalog


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`category` | string
`rules` | [Array&lt;CatalogRule&gt;](CatalogRule.md)
`cartItemFilters` | [Array&lt;CartItemFilterTemplate&gt;](CartItemFilterTemplate.md)

## Example

```typescript
import type { NewCollectionsCatalog } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": Customer loyalty boost,
  "description": null,
  "category": null,
  "rules": null,
  "cartItemFilters": null,
} satisfies NewCollectionsCatalog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCollectionsCatalog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


