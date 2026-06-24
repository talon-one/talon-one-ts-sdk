
# CustomerAchievement

A customer\'s progress in an achievement, together with the achievement definition.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`title` | string
`description` | string
`target` | number
`recurrencePolicy` | string
`activationPolicy` | string
`fixedStartDate` | Date
`endDate` | Date
`allowRollbackAfterCompletion` | boolean
`currentProgress` | [AchievementProgress](AchievementProgress.md)

## Example

```typescript
import type { CustomerAchievement } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 3,
  "name": FreeCoffee10Orders,
  "title": 50% off on 50th purchase.,
  "description": 50% off for every 50th purchase in a year.,
  "target": 10,
  "recurrencePolicy": no_recurrence,
  "activationPolicy": fixed_schedule,
  "fixedStartDate": 2024-01-15T15:04:05Z07:00,
  "endDate": 2024-02-15T15:04:05Z07:00,
  "allowRollbackAfterCompletion": false,
  "currentProgress": null,
} satisfies CustomerAchievement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerAchievement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


