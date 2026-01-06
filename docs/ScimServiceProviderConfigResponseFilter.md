
# ScimServiceProviderConfigResponseFilter

Configuration settings related to filtering SCIM resources based on specific criteria.

## Properties

Name | Type
------------ | -------------
`maxResults` | number
`supported` | boolean

## Example

```typescript
import type { ScimServiceProviderConfigResponseFilter } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "maxResults": null,
  "supported": null,
} satisfies ScimServiceProviderConfigResponseFilter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimServiceProviderConfigResponseFilter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


