
# RiskDetail

Details of a risk, including its most severely affected entities.

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
`modified` | Date
`affectedEntities` | [Array&lt;RiskAffectedEntityItem&gt;](RiskAffectedEntityItem.md)

## Example

```typescript
import type { RiskDetail } from 'talon_one_sdk'

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
  "modified": 2026-06-05T06:26:13.698884Z,
  "affectedEntities": null,
} satisfies RiskDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


