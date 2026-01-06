
# ReturnIntegrationRequest

The body of a return integration API request. Next to the cart items details, this contains an optional listing of extra properties that should be returned in the response.

## Properties

Name | Type
------------ | -------------
`_return` | [NewReturn](NewReturn.md)
`responseContent` | Array&lt;string&gt;

## Example

```typescript
import type { ReturnIntegrationRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "_return": null,
  "responseContent": [customerSession, customerProfile],
} satisfies ReturnIntegrationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReturnIntegrationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


