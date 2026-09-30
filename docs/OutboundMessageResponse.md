
# OutboundMessageResponse

Log entry for an outbound message.

## Properties

Name | Type
------------ | -------------
`statusCode` | number
`rawBody` | string
`createdAt` | Date
`processingTimeMs` | number

## Example

```typescript
import type { OutboundMessageResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "statusCode": 200,
  "rawBody": HTTP/1.1 200 OK
Content-Type: application/json

{},
  "createdAt": 2026-08-17T14:32:05Z,
  "processingTimeMs": 180,
} satisfies OutboundMessageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutboundMessageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


