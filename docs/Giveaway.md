
# Giveaway


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`code` | string
`poolId` | number
`startDate` | Date
`endDate` | Date
`attributes` | object
`used` | boolean
`importId` | number
`profileIntegrationId` | string
`profileId` | number

## Example

```typescript
import type { Giveaway } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "code": GIVEAWAY1,
  "poolId": 1,
  "startDate": 2022-01-02T15:04:05Z07:00,
  "endDate": 2023-01-02T15:04:05Z07:00,
  "attributes": null,
  "used": true,
  "importId": 4,
  "profileIntegrationId": R195412,
  "profileId": 1,
} satisfies Giveaway

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Giveaway
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


