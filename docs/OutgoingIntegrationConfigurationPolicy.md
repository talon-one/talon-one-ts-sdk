
# OutgoingIntegrationConfigurationPolicy

The outgoing integration policy specific to each integration type.

## Properties

Name | Type
------------ | -------------
`baseUrl` | string
`apiKey` | string
`accountId` | string
`passcode` | string
`appId` | string
`dataApiId` | string
`dataApiKey` | string

## Example

```typescript
import type { OutgoingIntegrationConfigurationPolicy } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "baseUrl": https://api.iterable.com,
  "apiKey": 1234df4ba16940ca59c9352936d080a8,
  "accountId": A9X-7A6-4A6B,
  "passcode": ABB-BAF-AWZP,
  "appId": LDUBEU9PLTPYXV30SMTYAAAA,
  "dataApiId": LDUBEU9PLTPYXV30SMTYAAAA,
  "dataApiKey": R95crrAAdZ747QLXe8LwnGLX,
} satisfies OutgoingIntegrationConfigurationPolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutgoingIntegrationConfigurationPolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


