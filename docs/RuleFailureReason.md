
# RuleFailureReason

Details about why a rule failed.

## Properties

Name | Type
------------ | -------------
`campaignID` | number
`campaignName` | string
`rulesetID` | number
`couponID` | number
`couponValue` | string
`referralID` | number
`referralValue` | string
`rewardId` | number
`rewardIntegrationId` | string
`ruleIndex` | number
`ruleName` | string
`conditionIndex` | number
`effectIndex` | number
`details` | string
`evaluationGroupID` | number
`evaluationGroupMode` | string

## Example

```typescript
import type { RuleFailureReason } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignID": null,
  "campaignName": null,
  "rulesetID": null,
  "couponID": 4928,
  "couponValue": null,
  "referralID": null,
  "referralValue": null,
  "rewardId": 7,
  "rewardIntegrationId": 5c0b5e6d-3f8a-4c2b-9f1e-2a7d6b4c8e90,
  "ruleIndex": null,
  "ruleName": null,
  "conditionIndex": null,
  "effectIndex": null,
  "details": null,
  "evaluationGroupID": 3,
  "evaluationGroupMode": stackable,
} satisfies RuleFailureReason

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuleFailureReason
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


