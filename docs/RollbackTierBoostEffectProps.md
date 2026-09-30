
# RollbackTierBoostEffectProps

This effect indicates that a loyalty tier boost was rolled back.  The Rule Engine triggers this effect when you cancel a customer session that previously triggered the [boostLoyaltyTier](https://docs.talon.one/docs/dev/integration-api/api-effects#boostloyaltytier) API effect. The tier boost is voided and the customer returns to the tier determined by their points balance.  This effect only applies to full session cancellations. Partially returned sessions do not trigger a tier boost rollback.

## Properties

Name | Type
------------ | -------------
`programId` | number
`subLedgerId` | string
`tierName` | string
`boostUuid` | string

## Example

```typescript
import type { RollbackTierBoostEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "programId": 10,
  "subLedgerId": ,
  "tierName": Gold,
  "boostUuid": 27b16dbb-fbc7-4c02-99b1-b21b8a94c186,
} satisfies RollbackTierBoostEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackTierBoostEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


