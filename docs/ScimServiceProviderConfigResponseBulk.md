
# ScimServiceProviderConfigResponseBulk

Configuration related to bulk operations, which allow multiple SCIM requests to be processed in a single HTTP request.

## Properties

Name | Type
------------ | -------------
`maxOperations` | number
`maxPayloadSize` | number
`supported` | boolean

## Example

```typescript
import type { ScimServiceProviderConfigResponseBulk } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "maxOperations": null,
  "maxPayloadSize": null,
  "supported": null,
} satisfies ScimServiceProviderConfigResponseBulk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimServiceProviderConfigResponseBulk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


