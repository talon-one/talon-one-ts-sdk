
# ExpiringCouponsData


## Properties

Name | Type
------------ | -------------
`couponValue` | string
`createdDate` | Date
`validFrom` | Date
`validUntil` | Date
`campaignId` | number
`customerProfileId` | string
`usageLimit` | number
`usageCounter` | number
`batchId` | string
`attributes` | { [key: string]: any; }

## Example

```typescript
import type { ExpiringCouponsData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "couponValue": XMAS-20-2021,
  "createdDate": 2024-07-24T14:15:22Z,
  "validFrom": 2024-10-24T14:15:22Z,
  "validUntil": 2024-12-24T14:15:22Z,
  "campaignId": 3,
  "customerProfileId": URNGV8294NV,
  "usageLimit": 100,
  "usageCounter": 10,
  "batchId": 32535-43255,
  "attributes": null,
} satisfies ExpiringCouponsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExpiringCouponsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


