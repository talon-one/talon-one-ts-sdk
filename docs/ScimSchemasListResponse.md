
# ScimSchemasListResponse

List of resource schemas supported by the SCIM provisioning protocol.

## Properties

Name | Type
------------ | -------------
`resources` | [Array&lt;ScimSchemaResource&gt;](ScimSchemaResource.md)
`schemas` | Array&lt;string&gt;
`totalResults` | number

## Example

```typescript
import type { ScimSchemasListResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "resources": null,
  "schemas": null,
  "totalResults": null,
} satisfies ScimSchemasListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimSchemasListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


