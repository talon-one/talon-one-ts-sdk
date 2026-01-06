
# AccountAnalytics


## Properties

Name | Type
------------ | -------------
`applications` | number
`liveApplications` | number
`sandboxApplications` | number
`campaigns` | number
`activeCampaigns` | number
`liveActiveCampaigns` | number
`coupons` | number
`activeCoupons` | number
`expiredCoupons` | number
`referralCodes` | number
`activeReferralCodes` | number
`expiredReferralCodes` | number
`activeRules` | number
`users` | number
`roles` | number
`customAttributes` | number
`webhooks` | number
`loyaltyPrograms` | number
`liveLoyaltyPrograms` | number
`lastUpdatedAt` | Date

## Example

```typescript
import type { AccountAnalytics } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applications": 11,
  "liveApplications": 6,
  "sandboxApplications": 2,
  "campaigns": 35,
  "activeCampaigns": 15,
  "liveActiveCampaigns": 10,
  "coupons": 850,
  "activeCoupons": 650,
  "expiredCoupons": 200,
  "referralCodes": 500,
  "activeReferralCodes": 100,
  "expiredReferralCodes": 400,
  "activeRules": 35,
  "users": null,
  "roles": 10,
  "customAttributes": 18,
  "webhooks": 2,
  "loyaltyPrograms": 5,
  "liveLoyaltyPrograms": 5,
  "lastUpdatedAt": 2022-12-12T12:12:12Z,
} satisfies AccountAnalytics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountAnalytics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


