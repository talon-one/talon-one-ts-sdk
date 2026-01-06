
# RollbackDeductedLoyaltyPointsEffectProps

The properties specific to the \"rollbackDeductedLoyaltyPoints\" effect. This effect is triggered whenever a previously closed session is cancelled and a deductLoyaltyPoints effect was revoked.

## Properties

Name | Type
------------ | -------------
`programId` | number
`subLedgerId` | string
`value` | number
`recipientIntegrationId` | string
`startDate` | Date
`expiryDate` | Date
`transactionUUID` | string
`cardIdentifier` | string

## Example

```typescript
import type { RollbackDeductedLoyaltyPointsEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "programId": null,
  "subLedgerId": null,
  "value": null,
  "recipientIntegrationId": URNGV8294NV,
  "startDate": null,
  "expiryDate": null,
  "transactionUUID": null,
  "cardIdentifier": summer-loyalty-card-0543,
} satisfies RollbackDeductedLoyaltyPointsEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackDeductedLoyaltyPointsEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


