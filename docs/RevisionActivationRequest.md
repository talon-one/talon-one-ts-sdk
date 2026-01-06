
# RevisionActivationRequest


## Properties

Name | Type
------------ | -------------
`userIds` | Array&lt;number&gt;
`activateAt` | Date

## Example

```typescript
import type { RevisionActivationRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "userIds": [1,2,3],
  "activateAt": 2025-10-01T16:00:05Z07:00,
} satisfies RevisionActivationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RevisionActivationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


