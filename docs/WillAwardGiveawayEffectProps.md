
# WillAwardGiveawayEffectProps

The properties specific to the \"awardGiveaway\" effect when the session is not closed yet. This effect replaces \"awardGiveaway\" only when updating a session with any state other than \"closed\". This is to ensure no giveaway codes are leaked when they are still not guaranteed to be awarded.

## Properties

Name | Type
------------ | -------------
`poolId` | number
`poolName` | string
`recipientIntegrationId` | string

## Example

```typescript
import type { WillAwardGiveawayEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "poolId": 2,
  "poolName": My pool,
  "recipientIntegrationId": URNGV8294NV,
} satisfies WillAwardGiveawayEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WillAwardGiveawayEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


