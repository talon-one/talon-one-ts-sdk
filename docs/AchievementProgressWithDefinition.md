
# AchievementProgressWithDefinition


## Properties

Name | Type
------------ | -------------
`status` | string
`progress` | number
`startDate` | Date
`completionDate` | Date
`endDate` | Date
`achievementId` | number
`name` | string
`title` | string
`description` | string
`campaignId` | number
`target` | number
`achievementRecurrencePolicy` | string
`achievementActivationPolicy` | string
`achievementFixedStartDate` | Date
`achievementEndDate` | Date
`achievementAllowRollbackAfterCompletion` | boolean

## Example

```typescript
import type { AchievementProgressWithDefinition } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "status": completed,
  "progress": 10,
  "startDate": 2024-01-01T15:04:05Z07:00,
  "completionDate": 2024-01-15T15:04:05Z07:00,
  "endDate": 2024-02-01T15:04:05Z07:00,
  "achievementId": 3,
  "name": FreeCoffee10Orders,
  "title": 50% off on 50th purchase.,
  "description": 50% off for every 50th purchase in a year.,
  "campaignId": 3,
  "target": 10,
  "achievementRecurrencePolicy": no_recurrence,
  "achievementActivationPolicy": fixed_schedule,
  "achievementFixedStartDate": 2024-01-15T15:04:05Z07:00,
  "achievementEndDate": 2024-02-15T15:04:05Z07:00,
  "achievementAllowRollbackAfterCompletion": false,
} satisfies AchievementProgressWithDefinition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AchievementProgressWithDefinition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


