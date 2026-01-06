
# Rule


## Properties

Name | Type
------------ | -------------
`id` | string
`parentId` | string
`title` | string
`description` | string
`bindings` | [Array&lt;Binding&gt;](Binding.md)
`condition` | Array&lt;any&gt;
`effects` | Array&lt;object&gt;

## Example

```typescript
import type { Rule } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 7fa800a8-ac8d-4792-85dc-c4650dcc8f23,
  "parentId": 7fa800a8-ac8d-4792-85dc-c4650dcc8f23,
  "title": Give discount via coupon,
  "description": Creates a discount when a coupon is valid,
  "bindings": null,
  "condition": [and, [couponValid]],
  "effects": [catch, [noop], [setDiscount, 10% off, [*, [., Session, Total], [/, 10, 100]]]],
} satisfies Rule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Rule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


