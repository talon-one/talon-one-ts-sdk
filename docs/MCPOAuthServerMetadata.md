
# MCPOAuthServerMetadata


## Properties

Name | Type
------------ | -------------
`issuer` | string
`authorizationEndpoint` | string
`tokenEndpoint` | string
`registrationEndpoint` | string
`responseTypesSupported` | Array&lt;string&gt;
`grantTypesSupported` | Array&lt;string&gt;
`codeChallengeMethodsSupported` | Array&lt;string&gt;

## Example

```typescript
import type { MCPOAuthServerMetadata } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "issuer": https://mycompany.talon.one,
  "authorizationEndpoint": https://mycompany.talon.one/v1/mcp/auth/authorize,
  "tokenEndpoint": https://mycompany.talon.one/v1/mcp/auth/token,
  "registrationEndpoint": https://mycompany.talon.one/v1/mcp/auth/register,
  "responseTypesSupported": ["code"],
  "grantTypesSupported": ["authorization_code"],
  "codeChallengeMethodsSupported": ["S256"],
} satisfies MCPOAuthServerMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPOAuthServerMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


