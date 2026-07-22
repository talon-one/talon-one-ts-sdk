
# DiscardRisksRequest


## Properties

Name | Type
------------ | -------------
`riskIds` | Array&lt;number&gt;
`reason` | string
`comment` | string

## Example

```typescript
import type { DiscardRisksRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "riskIds": [1,2,3],
  "reason": expected_behavior,
  "comment": Duplicate of a risk already being handled.,
} satisfies DiscardRisksRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscardRisksRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


