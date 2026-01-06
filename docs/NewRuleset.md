
# NewRuleset


## Properties

Name | Type
------------ | -------------
`rules` | [Array&lt;Rule&gt;](Rule.md)
`strikethroughRules` | [Array&lt;Rule&gt;](Rule.md)
`bindings` | [Array&lt;Binding&gt;](Binding.md)
`rbVersion` | string
`activate` | boolean

## Example

```typescript
import type { NewRuleset } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "rules": null,
  "strikethroughRules": null,
  "bindings": [],
  "rbVersion": v2,
  "activate": true,
} satisfies NewRuleset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewRuleset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


