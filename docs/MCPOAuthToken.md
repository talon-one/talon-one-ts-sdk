
# MCPOAuthToken


## Properties

Name | Type
------------ | -------------
`accessToken` | string
`tokenType` | string
`expiresIn` | number
`refreshToken` | string
`refreshTokenExpiresIn` | number

## Example

```typescript
import type { MCPOAuthToken } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "accessToken": mcpoa:4a3b2c1d...,
  "tokenType": Bearer,
  "expiresIn": 3600,
  "refreshToken": mcpor:9f8e7d6c...,
  "refreshTokenExpiresIn": 2592000,
} satisfies MCPOAuthToken

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPOAuthToken
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


