
# OutboundLogStreamCursorEntry

The cursor for the next page, as the last entry of an `ndjson` stream. Omitted when there are no more results.

## Properties

Name | Type
------------ | -------------
`type` | [OutboundLogStreamEntryType](OutboundLogStreamEntryType.md)
`data` | [OutboundLogStreamCursor](OutboundLogStreamCursor.md)

## Example

```typescript
import type { OutboundLogStreamCursorEntry } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "data": null,
} satisfies OutboundLogStreamCursorEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutboundLogStreamCursorEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


