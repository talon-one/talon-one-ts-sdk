
# AttributesMandatory

Arbitrary settings associated with attributes.

## Properties

Name | Type
------------ | -------------
`campaigns` | Array&lt;string&gt;
`coupons` | Array&lt;string&gt;

## Example

```typescript
import type { AttributesMandatory } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaigns": null,
  "coupons": null,
} satisfies AttributesMandatory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AttributesMandatory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


