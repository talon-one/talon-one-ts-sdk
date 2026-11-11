
# NewMCPOAuthStaticClient


## Properties

Name | Type
------------ | -------------
`clientName` | string
`redirectUris` | Array&lt;string&gt;
`expiryDate` | Date

## Example

```typescript
import type { NewMCPOAuthStaticClient } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "clientName": My MCP Integration,
  "redirectUris": [http://localhost:3000/callback],
  "expiryDate": 2027-01-01T00:00:00Z,
} satisfies NewMCPOAuthStaticClient

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewMCPOAuthStaticClient
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


