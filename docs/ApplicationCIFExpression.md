
# ApplicationCIFExpression


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`cartItemFilterId` | number
`createdBy` | number
`expression` | Array&lt;any&gt;
`applicationId` | number

## Example

```typescript
import type { ApplicationCIFExpression } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "cartItemFilterId": 216,
  "createdBy": 216,
  "expression": {expr=[filter, [., Session, CartItems], [[Item], [catch, false, [=, [., Item, Category], Kitchen]]]]},
  "applicationId": 322,
} satisfies ApplicationCIFExpression

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApplicationCIFExpression
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


