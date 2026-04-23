
# MCPKey


## Properties

Name | Type
------------ | -------------
`name` | string
`expiryDate` | Date
`id` | number
`createdBy` | number
`accountID` | number
`created` | Date
`disabled` | boolean
`lastUsed` | Date

## Example

```typescript
import type { MCPKey } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": My MCP key,
  "expiryDate": 2026-08-24T14:00:00Z,
  "id": 34,
  "createdBy": 280,
  "accountID": 13,
  "created": 2026-03-02T16:46:17.758585Z,
  "disabled": true,
  "lastUsed": 2026-03-02T16:46:17.758585Z,
} satisfies MCPKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MCPKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


