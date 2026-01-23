
# CartItemFilterTemplate

A cart item filter template stored in a library entry. Cart item filters in library entries only contain name (no description, as description is at the library entry level).

## Properties

Name | Type
------------ | -------------
`name` | string
`expression` | Array&lt;any&gt;

## Example

```typescript
import type { CartItemFilterTemplate } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Filter items by product,
  "expression": [filter, [., Session, CartItems], [[Item], [catch, false, [=, [., Item, Category], Kitchen]]]],
} satisfies CartItemFilterTemplate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CartItemFilterTemplate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


