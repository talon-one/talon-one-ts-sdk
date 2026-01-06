
# MessageLogResponse

Details of the response.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`response` | string
`status` | number

## Example

```typescript
import type { MessageLogResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": 2021-07-20T22:00:50Z,
  "response": UmVzcG9uc2UgY29udGVudA==,
  "status": 200,
} satisfies MessageLogResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageLogResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


