
# CatalogRuleset

A ruleset template stored in a catalog entry. It contains rule templates and the global bindings they rely on.

## Properties

Name | Type
------------ | -------------
`rules` | [Array&lt;CatalogRule&gt;](CatalogRule.md)
`bindings` | [Array&lt;Binding&gt;](Binding.md)
`rbVersion` | string

## Example

```typescript
import type { CatalogRuleset } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "rules": null,
  "bindings": [],
  "rbVersion": v2,
} satisfies CatalogRuleset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogRuleset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


