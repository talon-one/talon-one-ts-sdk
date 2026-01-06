
# Referral


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`startDate` | Date
`expiryDate` | Date
`usageLimit` | number
`campaignId` | number
`advocateProfileIntegrationId` | string
`friendProfileIntegrationId` | string
`attributes` | object
`importId` | number
`code` | string
`usageCounter` | number
`batchId` | string

## Example

```typescript
import type { Referral } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "startDate": 2020-11-10T23:00:00Z,
  "expiryDate": 2021-11-10T23:00:00Z,
  "usageLimit": 1,
  "campaignId": 78,
  "advocateProfileIntegrationId": URNGV8294NV,
  "friendProfileIntegrationId": BZGGC2454PA,
  "attributes": {channel=web},
  "importId": 4,
  "code": 27G47Y54VH9L,
  "usageCounter": 1,
  "batchId": tqyrgahe,
} satisfies Referral

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Referral
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


