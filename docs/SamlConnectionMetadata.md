
# SamlConnectionMetadata


## Properties

Name | Type
------------ | -------------
`name` | string
`enabled` | boolean
`accountId` | number
`metadataDocument` | string

## Example

```typescript
import type { SamlConnectionMetadata } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "enabled": null,
  "accountId": null,
  "metadataDocument": null,
} satisfies SamlConnectionMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SamlConnectionMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


