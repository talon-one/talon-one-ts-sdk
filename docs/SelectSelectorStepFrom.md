
# SelectSelectorStepFrom

The starting value of the selection. For the `many` operator this is the string `start` or `end`; for the `between` operator this is an integer start index. No discriminator is needed since the string and integer branches are distinguishable by JSON type alone.

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { SelectSelectorStepFrom } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies SelectSelectorStepFrom

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SelectSelectorStepFrom
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


