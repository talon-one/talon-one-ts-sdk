
# MessageTest


## Properties

Name | Type
------------ | -------------
`httpResponse` | string
`httpStatus` | number

## Example

```typescript
import type { MessageTest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "httpResponse": HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 256

{
  "message": "Hello, world!",
  "status": "success"
}
,
  "httpStatus": 200,
} satisfies MessageTest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageTest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


