
# OutgoingIntegrationCleverTapPolicy


## Properties

Name | Type
------------ | -------------
`baseUrl` | string
`accountId` | string
`passcode` | string

## Example

```typescript
import type { OutgoingIntegrationCleverTapPolicy } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "baseUrl": your-clevertap-url.com,
  "accountId": A9X-7A6-4A6B,
  "passcode": ABB-BAF-AWZP,
} satisfies OutgoingIntegrationCleverTapPolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutgoingIntegrationCleverTapPolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


