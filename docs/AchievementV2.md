
# AchievementV2


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`name` | string
`title` | string
`description` | string
`target` | number
`period` | string
`recurrencePolicy` | string
`activationPolicy` | string
`fixedStartDate` | Date
`endDate` | Date
`allowRollbackAfterCompletion` | boolean
`subscribedApplications` | Array&lt;number&gt;
`userId` | number
`createdBy` | string
`periodEndOverride` | [TimePoint](TimePoint.md)
`hasProgress` | boolean
`status` | string
`sandbox` | boolean
`timezone` | string
`campaignId` | number
`referencedByCampaigns` | [Array&lt;CampaignReference&gt;](CampaignReference.md)

## Example

```typescript
import type { AchievementV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "name": Order50Discount,
  "title": 50% off on 50th purchase.,
  "description": 50% off for every 50th purchase in a year.,
  "target": 50,
  "period": 1Y,
  "recurrencePolicy": no_recurrence,
  "activationPolicy": fixed_schedule,
  "fixedStartDate": 2024-01-15T15:04:05+07:00,
  "endDate": 2024-01-15T15:04:05+07:00,
  "allowRollbackAfterCompletion": false,
  "subscribedApplications": [132, 97],
  "userId": 1234,
  "createdBy": John Doe,
  "periodEndOverride": null,
  "hasProgress": null,
  "status": active,
  "sandbox": true,
  "timezone": Europe/Berlin,
  "campaignId": 3,
  "referencedByCampaigns": null,
} satisfies AchievementV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AchievementV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


