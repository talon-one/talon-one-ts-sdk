
# ExperimentBlueprint


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
`variants` | [Array&lt;ExperimentBlueprintVariant&gt;](ExperimentBlueprintVariant.md)
`cartItemFilters` | [Array&lt;CartItemFilterTemplate&gt;](CartItemFilterTemplate.md)
`created` | Date
`createdBy` | number
`modified` | Date
`modifiedBy` | number

## Example

```typescript
import type { ExperimentBlueprint } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "accountId": 3886,
  "applicationId": 322,
  "title": High value cart discount test,
  "description": Compares a flat discount against a percentage discount on high value carts.,
  "category": custom,
  "source": custom,
  "variants": null,
  "cartItemFilters": null,
  "created": 2021-09-12T10:12:42Z,
  "createdBy": 388,
  "modified": 2021-09-12T10:12:42Z,
  "modifiedBy": 388,
} satisfies ExperimentBlueprint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExperimentBlueprint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


