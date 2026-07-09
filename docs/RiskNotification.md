
# RiskNotification

A risk notification configuration rule.

## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`entity` | string
`activity` | string
`timeFrame` | string
`active` | boolean
`modified` | Date

## Example

```typescript
import type { RiskNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "entity": customer_profile,
  "activity": loyalty_points_earned,
  "timeFrame": 7D,
  "active": true,
  "modified": 2026-04-16T09:05:27.993483Z,
} satisfies RiskNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RiskNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


