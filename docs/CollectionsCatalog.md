
# CollectionsCatalog


## Properties

Name | Type
------------ | -------------
`id` | number
`accountId` | number
`applicationId` | number
`title` | string
`description` | string
`category` | string
`source` | string
`rules` | [Array&lt;CatalogRule&gt;](CatalogRule.md)
`cartItemFilters` | [Array&lt;CartItemFilterTemplate&gt;](CartItemFilterTemplate.md)
`created` | Date
`createdBy` | number
`modified` | Date
`modifiedBy` | number

## Example

```typescript
import type { CollectionsCatalog } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "accountId": null,
  "applicationId": null,
  "title": High value cart discount,
  "description": null,
  "category": null,
  "source": null,
  "rules": null,
  "cartItemFilters": null,
  "created": null,
  "createdBy": null,
  "modified": null,
  "modifiedBy": null,
} satisfies CollectionsCatalog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionsCatalog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


