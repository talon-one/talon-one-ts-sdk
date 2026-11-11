
# OutboundLogStreamCursor

Cursor for the next page of results.

## Properties

Name | Type
------------ | -------------
`nextCursor` | string

## Example

```typescript
import type { OutboundLogStreamCursor } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "nextCursor": SmJlNERRMHdyNWFsTmRDZDVYU0c=,
} satisfies OutboundLogStreamCursor

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutboundLogStreamCursor
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


