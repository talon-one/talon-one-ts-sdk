
# LimitCounter


## Properties

Name | Type
------------ | -------------
`campaignId` | number
`applicationId` | number
`accountId` | number
`id` | number
`action` | string
`profileId` | number
`profileIntegrationId` | string
`couponId` | number
`couponValue` | string
`referralId` | number
`referralValue` | string
`identifier` | string
`period` | string
`limit` | number
`counter` | number

## Example

```typescript
import type { LimitCounter } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignId": 211,
  "applicationId": 322,
  "accountId": 3886,
  "id": 6,
  "action": setDiscount,
  "profileId": 335,
  "profileIntegrationId": URNGV8294NV,
  "couponId": 34,
  "couponValue": XMAS-20-2021,
  "referralId": 4,
  "referralValue": ,
  "identifier": 91.11.156.141,
  "period": Y2021M8,
  "limit": 10,
  "counter": 5,
} satisfies LimitCounter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LimitCounter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


