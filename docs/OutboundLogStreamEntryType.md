
# OutboundLogStreamEntryType

Kind of entry in an `ndjson` stream of outbound logs:  - `log`: An outbound log entry. - `error`: An error that ended the stream. - `cursor`: The cursor for the next page. Always the last entry. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { OutboundLogStreamEntryType } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies OutboundLogStreamEntryType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutboundLogStreamEntryType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


