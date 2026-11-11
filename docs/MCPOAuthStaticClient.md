
# MCPOAuthStaticClient


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

## Example

```typescript
import type { MCPOAuthStaticClient } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "clientId": a3f8c1e2b4d56789,
  "clientName": My MCP Integration,
  "redirectUris": [https://example.com/callback, http://localhost:3000/callback],
  "createdAt": 2026-06-12T10:00:00Z,
  "id": 34,
  "createdBy": 280,
  "expiryDate": 2027-01-01T00:00:00Z,
} satisfies MCPOAuthStaticClient

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPOAuthStaticClient
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


