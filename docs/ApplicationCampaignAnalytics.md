
# ApplicationCampaignAnalytics


## Properties

Name | Type
------------ | -------------
`startTime` | Date
`endTime` | Date
`campaignId` | number
`campaignName` | string
`campaignTags` | Array&lt;string&gt;
`campaignState` | string
`totalRevenue` | [AnalyticsDataPointWithTrendAndInfluencedRate](AnalyticsDataPointWithTrendAndInfluencedRate.md)
`sessionsCount` | [AnalyticsDataPointWithTrendAndInfluencedRate](AnalyticsDataPointWithTrendAndInfluencedRate.md)
`avgItemsPerSession` | [AnalyticsDataPointWithTrendAndUplift](AnalyticsDataPointWithTrendAndUplift.md)
`avgSessionValue` | [AnalyticsDataPointWithTrendAndUplift](AnalyticsDataPointWithTrendAndUplift.md)
`totalDiscounts` | [AnalyticsDataPointWithTrend](AnalyticsDataPointWithTrend.md)
`couponsCount` | [AnalyticsDataPointWithTrend](AnalyticsDataPointWithTrend.md)

## Example

```typescript
import type { ApplicationCampaignAnalytics } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "startTime": 2024-02-01T00:00:00Z,
  "endTime": 2024-02-01T23:59:99Z,
  "campaignId": 1,
  "campaignName": Summer promotions,
  "campaignTags": [summer],
  "campaignState": running,
  "totalRevenue": null,
  "sessionsCount": null,
  "avgItemsPerSession": null,
  "avgSessionValue": null,
  "totalDiscounts": null,
  "couponsCount": null,
} satisfies ApplicationCampaignAnalytics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApplicationCampaignAnalytics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


