
# MCPOAuthClient


## Properties

Name | Type
------------ | -------------
`clientId` | string
`clientName` | string
`redirectUris` | Array&lt;string&gt;
`createdAt` | Date

## Example

```typescript
import type { MCPOAuthClient } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "clientId": a3f8c1e2b4d56789,
  "clientName": My MCP Integration,
  "redirectUris": ["https://example.com/callback","http://localhost:3000/callback"],
  "createdAt": 2026-06-12T10:00:00Z,
} satisfies MCPOAuthClient

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPOAuthClient
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


