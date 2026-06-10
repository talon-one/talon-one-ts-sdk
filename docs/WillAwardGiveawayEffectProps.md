
# WillAwardGiveawayEffectProps

The equivalent of the `awardGiveaway` effect but returned when updating a session with any state other than `closed`. This ensures no giveaway codes are leaked when they are still not guaranteed to be awarded.  For more information about session states, see [Manage the session\'s state](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions#manage-the-sessions-state).

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


