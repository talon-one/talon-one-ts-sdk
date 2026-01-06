
# AwardGiveawayEffectProps

The properties specific to the \"awardGiveaway\" effect. This effect contains information on the giveaway item, and which profile it was awarded to.

## Properties

Name | Type
------------ | -------------
`poolId` | number
`poolName` | string
`recipientIntegrationId` | string
`giveawayId` | number
`code` | string

## Example

```typescript
import type { AwardGiveawayEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "poolId": 2,
  "poolName": My pool,
  "recipientIntegrationId": URNGV8294NV,
  "giveawayId": 5,
  "code": 57638t-67439hty,
} satisfies AwardGiveawayEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AwardGiveawayEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


