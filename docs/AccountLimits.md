
# AccountLimits


## Properties

Name | Type
------------ | -------------
`liveApplications` | number
`sandboxApplications` | number
`activeCampaigns` | number
`coupons` | number
`referralCodes` | number
`activeRules` | number
`liveLoyaltyPrograms` | number
`sandboxLoyaltyPrograms` | number
`webhooks` | number
`users` | number
`apiVolume` | number
`promotionTypes` | Array&lt;string&gt;
`secondaryDeploymentPrice` | number
`currencyCode` | string

## Example

```typescript
import type { AccountLimits } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "liveApplications": null,
  "sandboxApplications": null,
  "activeCampaigns": null,
  "coupons": null,
  "referralCodes": null,
  "activeRules": null,
  "liveLoyaltyPrograms": null,
  "sandboxLoyaltyPrograms": null,
  "webhooks": null,
  "users": null,
  "apiVolume": null,
  "promotionTypes": null,
  "secondaryDeploymentPrice": null,
  "currencyCode": null,
} satisfies AccountLimits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountLimits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


