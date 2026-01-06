
# OutgoingIntegrationConfiguration


## Properties

Name | Type
------------ | -------------
`id` | number
`accountId` | number
`typeId` | number
`policy` | object

## Example

```typescript
import type { OutgoingIntegrationConfiguration } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "accountId": 3886,
  "typeId": 12,
  "policy": null,
} satisfies OutgoingIntegrationConfiguration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutgoingIntegrationConfiguration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


