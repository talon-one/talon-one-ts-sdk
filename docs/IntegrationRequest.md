
# IntegrationRequest

The body of a V2 integration API request (customer session update). Next to the customer session details, this contains an optional listing of extra properties that should be returned in the response.

## Properties

Name | Type
------------ | -------------
`customerSession` | [NewCustomerSessionV2](NewCustomerSessionV2.md)
`responseContent` | Array&lt;string&gt;

## Example

```typescript
import type { IntegrationRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "customerSession": null,
  "responseContent": [customerSession, customerProfile],
} satisfies IntegrationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


