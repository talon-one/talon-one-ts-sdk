
# RewardBudgetLimitCounter

The count of times the reward has been unlocked in the current period, and how many times it can still be unlocked. It is shown when the budget scope is `perReward`.

## Properties

Name | Type
------------ | -------------
`counter` | number
`remaining` | number

## Example

```typescript
import type { RewardBudgetLimitCounter } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "counter": 120,
  "remaining": 4880,
} satisfies RewardBudgetLimitCounter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RewardBudgetLimitCounter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


