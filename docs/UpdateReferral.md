
# UpdateReferral


## Properties

Name | Type
------------ | -------------
`friendProfileIntegrationId` | string
`startDate` | Date
`expiryDate` | Date
`usageLimit` | number
`attributes` | object

## Example

```typescript
import type { UpdateReferral } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "friendProfileIntegrationId": BZGGC2454PA,
  "startDate": 2020-11-10T23:00:00Z,
  "expiryDate": 2021-11-10T23:00:00Z,
  "usageLimit": 1,
  "attributes": null,
} satisfies UpdateReferral

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateReferral
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


