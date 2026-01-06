
# MessageLogRequest

Details of the request.

## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`request` | string

## Example

```typescript
import type { MessageLogRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": 2021-07-20T21:59:00Z,
  "request": SGVsbG8sIHdvcmxkIQ==,
} satisfies MessageLogRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageLogRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


