
# UpdateLoyaltyProgram


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`subscribedApplications` | Array&lt;number&gt;
`defaultValidity` | string
`defaultPending` | string
`allowSubledger` | boolean
`usersPerCardLimit` | number
`sandbox` | boolean
`programJoinPolicy` | string
`tiersExpirationPolicy` | string
`tierCycleStartDate` | Date
`tiersExpireIn` | string
`tiersDowngradePolicy` | string
`cardCodeSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`returnPolicy` | string
`tiers` | [Array&lt;NewLoyaltyTier&gt;](NewLoyaltyTier.md)

## Example

```typescript
import type { UpdateLoyaltyProgram } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": Point collection,
  "description": Customers collect 10 points per 1$ spent,
  "subscribedApplications": [132, 97],
  "defaultValidity": 2W_U,
  "defaultPending": immediate,
  "allowSubledger": false,
  "usersPerCardLimit": 111,
  "sandbox": true,
  "programJoinPolicy": null,
  "tiersExpirationPolicy": null,
  "tierCycleStartDate": 2021-09-12T10:12:42Z,
  "tiersExpireIn": 27W_U,
  "tiersDowngradePolicy": null,
  "cardCodeSettings": null,
  "returnPolicy": null,
  "tiers": null,
} satisfies UpdateLoyaltyProgram

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateLoyaltyProgram
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


