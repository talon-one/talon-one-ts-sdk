
# MCPOAuthSessionInfo


## Properties

Name | Type
------------ | -------------
`sessionId` | string
`expiresAt` | Date
`client` | [MCPOAuthClient](MCPOAuthClient.md)

## Example

```typescript
import type { MCPOAuthSessionInfo } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "sessionId": a3f8c1e2b4d567890123456789abcdef,
  "expiresAt": 2016-03-28T08:34:32.000Z,
  "client": null,
} satisfies MCPOAuthSessionInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPOAuthSessionInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


