
# RewardBudgetWithLimitCounter


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`rewardId` | number
`metric` | string
`scope` | string
`period` | string
`limit` | number
`limitCounter` | [Array&lt;RewardBudgetLimitCounter&gt;](RewardBudgetLimitCounter.md)

## Example

```typescript
import type { RewardBudgetWithLimitCounter } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "rewardId": 34,
  "metric": unlocks,
  "scope": perReward,
  "period": monthly,
  "limit": 5000,
  "limitCounter": null,
} satisfies RewardBudgetWithLimitCounter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RewardBudgetWithLimitCounter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


