
# GetAdditionalCosts200Response


## Properties

Name | Type
------------ | -------------
`totalResultSize` | number
`data` | [Array&lt;AccountAdditionalCost&gt;](AccountAdditionalCost.md)

## Example

```typescript
import type { GetAdditionalCosts200Response } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "totalResultSize": 1,
  "data": null,
} satisfies GetAdditionalCosts200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAdditionalCosts200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


