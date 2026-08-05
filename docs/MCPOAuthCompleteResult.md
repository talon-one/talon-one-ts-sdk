
# MCPOAuthCompleteResult


## Properties

Name | Type
------------ | -------------
`redirectUrl` | string

## Example

```typescript
import type { MCPOAuthCompleteResult } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "redirectUrl": http://localhost:3000/callback?code=abc123&state=xyz,
} satisfies MCPOAuthCompleteResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPOAuthCompleteResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


