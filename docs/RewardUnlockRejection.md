
# RewardUnlockRejection

Returned when a reward unlock is rejected by the Rule Engine, for example because the customer already unlocked this reward, the customer has insufficient points, or the reward\'s eligibility conditions are not met. 

## Properties

Name | Type
------------ | -------------
`message` | string
`ruleFailureReasons` | [Array&lt;RuleFailureReason&gt;](RuleFailureReason.md)

## Example

```typescript
import type { RewardUnlockRejection } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "message": reward unlock rejected,
  "ruleFailureReasons": null,
} satisfies RewardUnlockRejection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RewardUnlockRejection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


