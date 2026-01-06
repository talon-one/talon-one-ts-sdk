
# NewApplicationCIFExpression


## Properties

Name | Type
------------ | -------------
`cartItemFilterId` | number
`createdBy` | number
`expression` | Array&lt;any&gt;

## Example

```typescript
import type { NewApplicationCIFExpression } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "cartItemFilterId": 216,
  "createdBy": 216,
  "expression": {expr=[filter, [., Session, CartItems], [[Item], [catch, false, [=, [., Item, Category], Kitchen]]]]},
} satisfies NewApplicationCIFExpression

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewApplicationCIFExpression
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


