
# CampaignAnalytics


## Properties

Name | Type
------------ | -------------
`date` | Date
`campaignRevenue` | number
`totalCampaignRevenue` | number
`campaignRefund` | number
`totalCampaignRefund` | number
`campaignDiscountCosts` | number
`totalCampaignDiscountCosts` | number
`campaignRefundedDiscounts` | number
`totalCampaignRefundedDiscounts` | number
`campaignFreeItems` | number
`totalCampaignFreeItems` | number
`couponRedemptions` | number
`totalCouponRedemptions` | number
`couponRolledbackRedemptions` | number
`totalCouponRolledbackRedemptions` | number
`referralRedemptions` | number
`totalReferralRedemptions` | number
`couponsCreated` | number
`totalCouponsCreated` | number
`referralsCreated` | number
`totalReferralsCreated` | number
`addedLoyaltyPoints` | number
`totalAddedLoyaltyPoints` | number
`deductedLoyaltyPoints` | number
`totalDeductedLoyaltyPoints` | number

## Example

```typescript
import type { CampaignAnalytics } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "date": 2021-10-12T10:12:42Z,
  "campaignRevenue": 3539.76,
  "totalCampaignRevenue": 5784.63,
  "campaignRefund": null,
  "totalCampaignRefund": null,
  "campaignDiscountCosts": null,
  "totalCampaignDiscountCosts": null,
  "campaignRefundedDiscounts": null,
  "totalCampaignRefundedDiscounts": null,
  "campaignFreeItems": null,
  "totalCampaignFreeItems": 86,
  "couponRedemptions": null,
  "totalCouponRedemptions": null,
  "couponRolledbackRedemptions": null,
  "totalCouponRolledbackRedemptions": null,
  "referralRedemptions": null,
  "totalReferralRedemptions": null,
  "couponsCreated": null,
  "totalCouponsCreated": null,
  "referralsCreated": null,
  "totalReferralsCreated": null,
  "addedLoyaltyPoints": 250,
  "totalAddedLoyaltyPoints": 340,
  "deductedLoyaltyPoints": 120,
  "totalDeductedLoyaltyPoints": 220,
} satisfies CampaignAnalytics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignAnalytics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


