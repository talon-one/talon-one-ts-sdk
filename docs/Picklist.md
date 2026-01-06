
# Picklist


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`type` | string
`values` | Array&lt;string&gt;
`modifiedBy` | number
`createdBy` | number
`accountId` | number
`imported` | boolean

## Example

```typescript
import type { Picklist } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "type": string,
  "values": [Jeans, Shirt, Coat],
  "modifiedBy": 124,
  "createdBy": 134,
  "accountId": 3886,
  "imported": true,
} satisfies Picklist

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Picklist
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


