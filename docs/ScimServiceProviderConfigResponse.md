
# ScimServiceProviderConfigResponse

Service provider configuration details.

## Properties

Name | Type
------------ | -------------
`bulk` | [ScimServiceProviderConfigResponseBulk](ScimServiceProviderConfigResponseBulk.md)
`changePassword` | [ScimServiceProviderConfigResponseChangePassword](ScimServiceProviderConfigResponseChangePassword.md)
`documentationUri` | string
`filter` | [ScimServiceProviderConfigResponseFilter](ScimServiceProviderConfigResponseFilter.md)
`patch` | [ScimServiceProviderConfigResponsePatch](ScimServiceProviderConfigResponsePatch.md)
`schemas` | Array&lt;string&gt;
`sort` | [ScimServiceProviderConfigResponseSort](ScimServiceProviderConfigResponseSort.md)

## Example

```typescript
import type { ScimServiceProviderConfigResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "bulk": null,
  "changePassword": null,
  "documentationUri": null,
  "filter": null,
  "patch": null,
  "schemas": null,
  "sort": null,
} satisfies ScimServiceProviderConfigResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimServiceProviderConfigResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


