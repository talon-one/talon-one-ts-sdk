
# OutgoingIntegrationBrazePolicy


## Properties

Name | Type
------------ | -------------
`baseUrl` | string
`apiKey` | string

## Example

```typescript
import type { OutgoingIntegrationBrazePolicy } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "baseUrl": your-braze-url.com,
  "apiKey": Your-REST-API-Key,
} satisfies OutgoingIntegrationBrazePolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutgoingIntegrationBrazePolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


