
# NewSamlConnection


## Properties

Name | Type
------------ | -------------
`accountId` | number
`name` | string
`enabled` | boolean
`issuer` | string
`signOnURL` | string
`signOutURL` | string
`metadataURL` | string
`audienceURI` | string
`x509certificate` | string

## Example

```typescript
import type { NewSamlConnection } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "accountId": 3885,
  "name": null,
  "enabled": null,
  "issuer": null,
  "signOnURL": null,
  "signOutURL": null,
  "metadataURL": null,
  "audienceURI": null,
  "x509certificate": null,
} satisfies NewSamlConnection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewSamlConnection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


