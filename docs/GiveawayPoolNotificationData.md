
# GiveawayPoolNotificationData


## Properties

Name | Type
------------ | -------------
`event` | string
`poolId` | number
`poolName` | string
`poolDescription` | string
`accountId` | number
`applicationId` | number
`totalCodes` | number
`usedCodes` | number
`remainingCodes` | number
`thresholdPercent` | number

## Example

```typescript
import type { GiveawayPoolNotificationData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "event": giveaway_codes_low,
  "poolId": 5,
  "poolName": Summer Giveaway,
  "poolDescription": Summer giveaway codes,
  "accountId": 10,
  "applicationId": 42,
  "totalCodes": 1000,
  "usedCodes": 920,
  "remainingCodes": 80,
  "thresholdPercent": 10,
} satisfies GiveawayPoolNotificationData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GiveawayPoolNotificationData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


