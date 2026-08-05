
# MCPOAuthTokenError


## Properties

Name | Type
------------ | -------------
`error` | string
`errorDescription` | string

## Example

```typescript
import type { MCPOAuthTokenError } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "error": invalid_grant,
  "errorDescription": authorization code is invalid, already used, or expired,
} satisfies MCPOAuthTokenError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPOAuthTokenError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


