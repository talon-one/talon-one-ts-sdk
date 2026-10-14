
# CustomerAchievementHistoryEntry


## Properties

Name | Type
------------ | -------------
`status` | string
`progress` | number
`startDate` | Date
`completionDate` | Date
`endDate` | Date
`progressTrackerId` | number

## Example

```typescript
import type { CustomerAchievementHistoryEntry } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "status": completed,
  "progress": 10,
  "startDate": 2024-01-01T15:04:05Z07:00,
  "completionDate": 2024-01-15T15:04:05Z07:00,
  "endDate": 2024-02-01T15:04:05Z07:00,
  "progressTrackerId": 42,
} satisfies CustomerAchievementHistoryEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerAchievementHistoryEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


