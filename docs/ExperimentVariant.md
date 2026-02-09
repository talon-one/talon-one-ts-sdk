
# ExperimentVariant


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`name` | string
`experimentId` | number
`ruleset` | [Ruleset](Ruleset.md)
`weight` | number
`isPrimary` | boolean

## Example

```typescript
import type { ExperimentVariant } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "name": Variant A,
  "experimentId": 10,
  "ruleset": null,
  "weight": 12,
  "isPrimary": true,
} satisfies ExperimentVariant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExperimentVariant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


