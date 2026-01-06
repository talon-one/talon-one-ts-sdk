
# ReopenSessionResponse

This is the response type returned by the Reopen customer sessions endpoint. It contains the rolled back effects. 

## Properties

Name | Type
------------ | -------------
`effects` | [Array&lt;Effect&gt;](Effect.md)

## Example

```typescript
import type { ReopenSessionResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "effects": null,
} satisfies ReopenSessionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReopenSessionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


