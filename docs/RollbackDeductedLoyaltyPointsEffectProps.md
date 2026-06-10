
# RollbackDeductedLoyaltyPointsEffectProps

This effect is triggered in the following cases:  - A session is _cancelled_ and this session deducted loyalty points. The rollback action returns the redeemed loyalty points to the customer. - A session is impacted by a _partial return_. Only added loyalty points that are still **pending** are rolled back. - A session in which loyalty points were spent is reopened.  See the [session states](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions#customer-session-states).  If you set custom activation and expiration dates for the loyalty points, use the `startDate` and `expiryDate` properties to identify when the reward will be active and when will expire.  If the loyalty program is [profile-based](https://docs.talon.one/docs/product/loyalty-programs/profile-based/profile-based-overview), use the `recipientIntegrationId` property to identify the user who receives the loyalty points. If the loyalty program is [card-based](https://docs.talon.one/docs/product/loyalty-programs/overview#loyalty-program-types), use the `cardIdentifier` property to identify the loyalty card where the points are reimbursed.

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


