
# RewardBudget


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

## Example

```typescript
import type { RewardBudget } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "rewardId": 34,
  "metric": unlocks,
  "scope": perReward,
  "period": monthly,
  "limit": 5000,
} satisfies RewardBudget

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RewardBudget
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


