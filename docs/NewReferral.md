
# NewReferral


## Properties

Name | Type
------------ | -------------
`startDate` | Date
`expiryDate` | Date
`usageLimit` | number
`campaignId` | number
`advocateProfileIntegrationId` | string
`friendProfileIntegrationId` | string
`attributes` | object

## Example

```typescript
import type { NewReferral } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "startDate": 2020-11-10T23:00:00Z,
  "expiryDate": 2021-11-10T23:00:00Z,
  "usageLimit": 1,
  "campaignId": 78,
  "advocateProfileIntegrationId": URNGV8294NV,
  "friendProfileIntegrationId": BZGGC2454PA,
  "attributes": {channel=web},
} satisfies NewReferral

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewReferral
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


