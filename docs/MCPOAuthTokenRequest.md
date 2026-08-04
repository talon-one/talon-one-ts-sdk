
# MCPOAuthTokenRequest


## Properties

Name | Type
------------ | -------------
`grantType` | string
`code` | string
`clientId` | string
`redirectUri` | string
`codeVerifier` | string
`refreshToken` | string

## Example

```typescript
import type { MCPOAuthTokenRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "grantType": authorization_code,
  "code": 4a3b2c1d9e6f78901234567890abcdef,
  "clientId": a3f8c1e2b4d56789,
  "redirectUri": http://localhost:3000/callback,
  "codeVerifier": dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk,
  "refreshToken": mcpor:9f8e7d6c,
} satisfies MCPOAuthTokenRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPOAuthTokenRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


