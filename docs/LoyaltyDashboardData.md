
# LoyaltyDashboardData

Datapoint for the graphs and cards on a loyalty program dashboard.

## Properties

Name | Type
------------ | -------------
`date` | Date
`totalActivePoints` | number
`totalPendingPoints` | number
`totalSpentPoints` | number
`totalExpiredPoints` | number
`totalNegativePoints` | number
`totalMembers` | number
`newMembers` | number
`spentPoints` | [LoyaltyDashboardPointsBreakdown](LoyaltyDashboardPointsBreakdown.md)
`earnedPoints` | [LoyaltyDashboardPointsBreakdown](LoyaltyDashboardPointsBreakdown.md)

## Example

```typescript
import type { LoyaltyDashboardData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "totalActivePoints": 9756,
  "totalPendingPoints": 548,
  "totalSpentPoints": 25668,
  "totalExpiredPoints": 1156,
  "totalNegativePoints": 32,
  "totalMembers": 2582,
  "newMembers": 3,
  "spentPoints": null,
  "earnedPoints": null,
} satisfies LoyaltyDashboardData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyDashboardData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


