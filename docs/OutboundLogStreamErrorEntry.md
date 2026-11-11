
# OutboundLogStreamErrorEntry

An error that ended an `ndjson` stream, such as a log entry that couldn\'t be read. It is the last entry and the response is incomplete.

## Properties

Name | Type
------------ | -------------
`type` | [OutboundLogStreamEntryType](OutboundLogStreamEntryType.md)
`data` | [OutboundLogStreamError](OutboundLogStreamError.md)

## Example

```typescript
import type { OutboundLogStreamErrorEntry } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "data": null,
} satisfies OutboundLogStreamErrorEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutboundLogStreamErrorEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


