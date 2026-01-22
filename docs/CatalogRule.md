
# CatalogRule

A rule template stored in a catalog entry. Rules in catalog entries only contain title (no description, as description is at the catalog entry level).

## Properties

Name | Type
------------ | -------------
`title` | string
`bindings` | [Array&lt;Binding&gt;](Binding.md)
`condition` | Array&lt;any&gt;
`effects` | Array&lt;object&gt;

## Example

```typescript
import type { CatalogRule } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": Give discount via coupon,
  "bindings": null,
  "condition": [and, [couponValid]],
  "effects": [catch, [noop], [setDiscount, 10% off, [*, [., Session, Total], [/, 10, 100]]]],
} satisfies CatalogRule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogRule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


