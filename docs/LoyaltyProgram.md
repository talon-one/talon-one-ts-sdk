
# LoyaltyProgram


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
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
`accountID` | number
`name` | string
`tiers` | [Array&lt;LoyaltyTier&gt;](LoyaltyTier.md)
`timezone` | string
`cardBased` | boolean
`canUpdateTiers` | boolean
`canUpdateTierExpirationPolicy` | boolean
`canUpgradeToAdvancedTiers` | boolean
`canUpdateSubledgers` | boolean

## Example

```typescript
import type { LoyaltyProgram } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 139,
  "created": 2020-06-10T09:05:27.993483Z,
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
  "accountID": 1,
  "name": my_program,
  "tiers": [{name=Gold, minPoints=300, id=3, created=2021-06-10T09:05:27.993483Z, programID=139}, {name=Silver, minPoints=200, id=2, created=2021-06-10T09:04:59.355258Z, programID=139}, {name=Bronze, minPoints=100, id=1, created=2021-06-10T09:04:39.355258Z, programID=139}],
  "timezone": Europe/Berlin,
  "cardBased": true,
  "canUpdateTiers": true,
  "canUpdateTierExpirationPolicy": true,
  "canUpgradeToAdvancedTiers": true,
  "canUpdateSubledgers": true,
} satisfies LoyaltyProgram

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyProgram
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


