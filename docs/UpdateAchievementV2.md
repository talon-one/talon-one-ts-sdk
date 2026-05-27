
# UpdateAchievementV2


## Properties

Name | Type
------------ | -------------
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

## Example

```typescript
import type { UpdateAchievementV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
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
} satisfies UpdateAchievementV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAchievementV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


