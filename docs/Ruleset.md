
# Ruleset


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`userId` | number
`rules` | [Array&lt;Rule&gt;](Rule.md)
`strikethroughRules` | [Array&lt;Rule&gt;](Rule.md)
`bindings` | [Array&lt;Binding&gt;](Binding.md)
`rbVersion` | string
`activate` | boolean
`campaignId` | number
`templateId` | number
`activatedAt` | Date

## Example

```typescript
import type { Ruleset } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "userId": 388,
  "rules": null,
  "strikethroughRules": null,
  "bindings": [],
  "rbVersion": v2,
  "activate": true,
  "campaignId": 320,
  "templateId": 3,
  "activatedAt": null,
} satisfies Ruleset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Ruleset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


