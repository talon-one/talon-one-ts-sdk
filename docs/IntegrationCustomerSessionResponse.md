
# IntegrationCustomerSessionResponse


## Properties

Name | Type
------------ | -------------
`customerSession` | [CustomerSessionV2](CustomerSessionV2.md)
`effects` | [Array&lt;Effect&gt;](Effect.md)

## Example

```typescript
import type { IntegrationCustomerSessionResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "customerSession": null,
  "effects": null,
} satisfies IntegrationCustomerSessionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationCustomerSessionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


