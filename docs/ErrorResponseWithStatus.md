
# ErrorResponseWithStatus


## Properties

Name | Type
------------ | -------------
`message` | string
`errors` | [Array&lt;APIError&gt;](APIError.md)
`statusCode` | number

## Example

```typescript
import type { ErrorResponseWithStatus } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "message": null,
  "errors": null,
  "statusCode": null,
} satisfies ErrorResponseWithStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorResponseWithStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


