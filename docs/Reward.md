
# Reward


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`accountId` | number
`name` | string
`apiName` | string
`description` | string
`applicationIds` | Array&lt;number&gt;
`sandbox` | boolean
`visibilityConditions` | [Rule](Rule.md)
`rule` | [Rule](Rule.md)
`bindings` | [Array&lt;Binding&gt;](Binding.md)
`modified` | Date
`status` | string
`pointsRequired` | [Array&lt;RewardPointsRequired&gt;](RewardPointsRequired.md)

## Example

```typescript
import type { Reward } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "accountId": 3886,
  "name": Free Coffee,
  "apiName": free-coffee,
  "description": This reward gets you one free coffee.,
  "applicationIds": [1, 2, 3],
  "sandbox": true,
  "visibilityConditions": null,
  "rule": null,
  "bindings": [],
  "modified": null,
  "status": active,
  "pointsRequired": null,
} satisfies Reward

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Reward
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


