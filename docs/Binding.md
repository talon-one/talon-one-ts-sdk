
# Binding


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`expression` | Array&lt;any&gt;
`valueType` | string
`minValue` | number
`maxValue` | number
`attributeId` | number
`description` | string

## Example

```typescript
import type { Binding } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Discount percentage,
  "type": templateParameter,
  "expression": [identity, 10],
  "valueType": number,
  "minValue": 0,
  "maxValue": 19.9,
  "attributeId": 100,
  "description": The percentage discount applied to the cart total.,
} satisfies Binding

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Binding
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


