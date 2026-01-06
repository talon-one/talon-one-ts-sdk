
# RollbackAddedLoyaltyPointsEffectProps

The properties specific to the \"rollbackAddedLoyaltyPoints\" effect. This gets triggered whenever previously a closed session with an addLoyaltyPoints effect is cancelled.

## Properties

Name | Type
------------ | -------------
`programId` | number
`subLedgerId` | string
`value` | number
`recipientIntegrationId` | string
`transactionUUID` | string
`cartItemPosition` | number
`cartItemSubPosition` | number
`cardIdentifier` | string

## Example

```typescript
import type { RollbackAddedLoyaltyPointsEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "programId": null,
  "subLedgerId": null,
  "value": null,
  "recipientIntegrationId": URNGV8294NV,
  "transactionUUID": null,
  "cartItemPosition": null,
  "cartItemSubPosition": null,
  "cardIdentifier": summer-loyalty-card-0543,
} satisfies RollbackAddedLoyaltyPointsEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackAddedLoyaltyPointsEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


