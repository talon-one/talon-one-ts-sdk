
# ScimPatchRequest

SCIM Patch request

## Properties

Name | Type
------------ | -------------
`schemas` | Array&lt;string&gt;
`operations` | [Array&lt;ScimPatchOperation&gt;](ScimPatchOperation.md)

## Example

```typescript
import type { ScimPatchRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "schemas": null,
  "operations": null,
} satisfies ScimPatchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimPatchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


