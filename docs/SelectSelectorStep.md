
# SelectSelectorStep

Picks a subset of the items by count, range, or exact position. The `operator` determines which additional fields are required: - `many` selects items from `from` (`start` or `end`) and is limited by `count`. - `between` selects items between integer indices `from` and `to`. - `one` selects the single item at `index`.

## Properties

Name | Type
------------ | -------------
`type` | string
`operator` | string
`from` | [SelectSelectorStepFrom](SelectSelectorStepFrom.md)
`to` | number
`count` | number
`index` | number
`partial` | boolean

## Example

```typescript
import type { SelectSelectorStep } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": select,
  "operator": many,
  "from": null,
  "to": 7,
  "count": 5,
  "index": 0,
  "partial": true,
} satisfies SelectSelectorStep

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SelectSelectorStep
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


