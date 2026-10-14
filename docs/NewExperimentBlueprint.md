
# NewExperimentBlueprint


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`category` | string
`variants` | [Array&lt;ExperimentBlueprintVariant&gt;](ExperimentBlueprintVariant.md)
`cartItemFilters` | [Array&lt;CartItemFilterTemplate&gt;](CartItemFilterTemplate.md)

## Example

```typescript
import type { NewExperimentBlueprint } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": High value cart discount test,
  "description": Compares a flat discount against a percentage discount on high value carts.,
  "category": custom,
  "variants": null,
  "cartItemFilters": null,
} satisfies NewExperimentBlueprint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewExperimentBlueprint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


