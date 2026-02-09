
# NewRevisionVersion


## Properties

Name | Type
------------ | -------------
`name` | string
`startTime` | Date
`endTime` | Date
`attributes` | object
`description` | string
`activeRulesetId` | number
`tags` | Array&lt;string&gt;
`couponSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`referralSettings` | [CodeGeneratorSettings](CodeGeneratorSettings.md)
`limits` | [Array&lt;LimitConfig&gt;](LimitConfig.md)
`reevaluateOnReturn` | boolean
`features` | Array&lt;string&gt;

## Example

```typescript
import type { NewRevisionVersion } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Summer promotions,
  "startTime": 2021-07-20T22:00:00Z,
  "endTime": 2021-09-22T22:00:00Z,
  "attributes": null,
  "description": Campaign for all summer 2021 promotions,
  "activeRulesetId": 5,
  "tags": null,
  "couponSettings": null,
  "referralSettings": null,
  "limits": null,
  "reevaluateOnReturn": true,
  "features": null,
} satisfies NewRevisionVersion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewRevisionVersion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


