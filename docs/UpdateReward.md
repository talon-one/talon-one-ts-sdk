
# UpdateReward


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`status` | string
`eligibilityConditions` | [Rule](Rule.md)
`rule` | [Rule](Rule.md)
`bindings` | [Array&lt;Binding&gt;](Binding.md)
`pointsRequired` | [Array&lt;RewardPointsRequired&gt;](RewardPointsRequired.md)

## Example

```typescript
import type { UpdateReward } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Free Coffee,
  "description": This reward gets you one free coffee.,
  "status": active,
  "eligibilityConditions": null,
  "rule": null,
  "bindings": [],
  "pointsRequired": null,
} satisfies UpdateReward

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateReward
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


