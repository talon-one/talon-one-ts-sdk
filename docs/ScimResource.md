
# ScimResource

Resource definition for the SCIM provisioning protocol.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`description` | string

## Example

```typescript
import type { ScimResource } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "description": null,
} satisfies ScimResource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimResource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


