
# NewReward


## Properties

Name | Type
------------ | -------------
`name` | string
`apiName` | string
`description` | string
`applicationIds` | Array&lt;number&gt;
`sandbox` | boolean
`eligibilityConditions` | [Rule](Rule.md)
`rule` | [Rule](Rule.md)
`bindings` | [Array&lt;Binding&gt;](Binding.md)
`pointsRequired` | [Array&lt;RewardPointsRequired&gt;](RewardPointsRequired.md)

## Example

```typescript
import type { NewReward } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Free Coffee,
  "apiName": free-coffee,
  "description": This reward gets you one free coffee.,
  "applicationIds": [1, 2, 3],
  "sandbox": true,
  "eligibilityConditions": null,
  "rule": null,
  "bindings": [],
  "pointsRequired": null,
} satisfies NewReward

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewReward
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


