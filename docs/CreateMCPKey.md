
# CreateMCPKey


## Properties

Name | Type
------------ | -------------
`name` | string
`expiryDate` | Date

## Example

```typescript
import type { CreateMCPKey } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": My MCP key,
  "expiryDate": 2026-08-24T14:00:00Z,
} satisfies CreateMCPKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateMCPKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


