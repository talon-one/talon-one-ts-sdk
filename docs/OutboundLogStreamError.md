
# OutboundLogStreamError

Details about an error that ended the stream.

## Properties

Name | Type
------------ | -------------
`error` | string
`id` | string

## Example

```typescript
import type { OutboundLogStreamError } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "error": internal server error,
  "id": 67e55044-10b1-426f-9247-bb680e5fe0c8,
} satisfies OutboundLogStreamError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutboundLogStreamError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


