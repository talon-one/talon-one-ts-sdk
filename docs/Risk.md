
# Risk

A risk detected by the anomaly detection service for one Application group.

## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`notificationId` | number
`featureDate` | Date
`groupKey` | string
`applicationId` | number
`status` | string
`criticality` | string
`entity` | string
`activity` | string
`timeFrame` | string
`reportedDate` | Date
`affectedEntityCount` | number
`description` | string
`discardReason` | string
`statusComment` | string
`statusChangedBy` | number
`statusChangedAt` | Date
`modified` | Date

## Example

```typescript
import type { Risk } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "notificationId": 3,
  "featureDate": 2026-06-05,
  "groupKey": 7,
  "applicationId": 7,
  "status": active,
  "criticality": critical,
  "entity": customer_profile,
  "activity": discounted_amount,
  "timeFrame": 7D,
  "reportedDate": 2026-06-05T06:26:13.698884Z,
  "affectedEntityCount": 4437,
  "description": Unusual discount usage detected for 4437 customer profiles.,
  "discardReason": expected_behavior,
  "statusComment": Investigated with the customer and fixed the loyalty rule.,
  "statusChangedBy": 42,
  "statusChangedAt": 2026-06-06T09:12:45.000000Z,
  "modified": 2026-06-05T06:26:13.698884Z,
} satisfies Risk

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Risk
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


