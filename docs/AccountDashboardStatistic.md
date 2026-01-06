
# AccountDashboardStatistic


## Properties

Name | Type
------------ | -------------
`revenue` | [Array&lt;AccountDashboardStatisticRevenue&gt;](AccountDashboardStatisticRevenue.md)
`discounts` | [Array&lt;AccountDashboardStatisticDiscount&gt;](AccountDashboardStatisticDiscount.md)
`loyaltyPoints` | [Array&lt;AccountDashboardStatisticLoyaltyPoints&gt;](AccountDashboardStatisticLoyaltyPoints.md)
`referrals` | [Array&lt;AccountDashboardStatisticReferrals&gt;](AccountDashboardStatisticReferrals.md)
`campaigns` | [AccountDashboardStatisticCampaigns](AccountDashboardStatisticCampaigns.md)

## Example

```typescript
import type { AccountDashboardStatistic } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "revenue": null,
  "discounts": null,
  "loyaltyPoints": null,
  "referrals": null,
  "campaigns": null,
} satisfies AccountDashboardStatistic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountDashboardStatistic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


