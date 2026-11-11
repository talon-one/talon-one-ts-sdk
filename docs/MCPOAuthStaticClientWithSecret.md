
# MCPOAuthStaticClientWithSecret


## Properties

Name | Type
------------ | -------------
`clientId` | string
`clientName` | string
`redirectUris` | Array&lt;string&gt;
`createdAt` | Date
`id` | number
`createdBy` | number
`expiryDate` | Date
`clientSecret` | string

## Example

```typescript
import type { MCPOAuthStaticClientWithSecret } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "clientId": a3f8c1e2b4d56789,
  "clientName": My MCP Integration,
  "redirectUris": [https://example.com/callback, http://localhost:3000/callback],
  "createdAt": 2026-06-12T10:00:00Z,
  "id": 34,
  "createdBy": 280,
  "expiryDate": 2027-01-01T00:00:00Z,
  "clientSecret": 7b1f0c9d8e2a4f6b1c3d5e7f9a0b2c4d6e8f0a1b3c5d7e9f1a2b4c6d8e0f2a4b,
} satisfies MCPOAuthStaticClientWithSecret

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPOAuthStaticClientWithSecret
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


