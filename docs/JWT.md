
# JWT

JSON web token used for accessing integrations in Prismatic

## Properties

Name | Type
------------ | -------------
`accessToken` | string
`expiresIn` | number

## Example

```typescript
import type { JWT } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "accessToken": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9,
  "expiresIn": 1000,
} satisfies JWT

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JWT
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


