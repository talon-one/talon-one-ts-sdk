
# OutboundMessages

Paginated list of outbound messages.

## Properties

Name | Type
------------ | -------------
`nextCursor` | string
`data` | [Array&lt;OutboundMessage&gt;](OutboundMessage.md)

## Example

```typescript
import type { OutboundMessages } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "nextCursor": SmJlNERRMHdyNWFsTmRDZDVYU0c=,
  "data": null,
} satisfies OutboundMessages

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutboundMessages
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


