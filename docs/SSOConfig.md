
# SSOConfig


## Properties

Name | Type
------------ | -------------
`enforced` | boolean
`newAcsUrl` | string

## Example

```typescript
import type { SSOConfig } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "enforced": true,
  "newAcsUrl": https://yourdeployment.talon.one/v1/saml_connections/5/saml_callback,
} satisfies SSOConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SSOConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


