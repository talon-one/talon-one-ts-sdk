
# NewMCPKey


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
`key` | string

## Example

```typescript
import type { NewMCPKey } from 'talon_one_sdk'

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
  "key": f45f90d21dcd9bac965c45e547e9754a3196891d09948e35adbcbedc4e9e4b01,
} satisfies NewMCPKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewMCPKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


