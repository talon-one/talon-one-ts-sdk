
# ConfirmRisksRequest


## Properties

Name | Type
------------ | -------------
`riskIds` | Array&lt;number&gt;
`comment` | string

## Example

```typescript
import type { ConfirmRisksRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "riskIds": [1,2,3],
  "comment": Investigated with the customer and fixed the loyalty rule.,
} satisfies ConfirmRisksRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConfirmRisksRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


