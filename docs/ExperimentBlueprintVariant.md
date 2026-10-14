
# ExperimentBlueprintVariant

An experiment variant template stored in an experiment blueprint. Variants only contain the fields needed to recreate them in an experiment.

## Properties

Name | Type
------------ | -------------
`name` | string
`weight` | number
`ruleset` | [CatalogRuleset](CatalogRuleset.md)
`isPrimary` | boolean

## Example

```typescript
import type { ExperimentBlueprintVariant } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Variant A,
  "weight": 50,
  "ruleset": null,
  "isPrimary": true,
} satisfies ExperimentBlueprintVariant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExperimentBlueprintVariant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


