
# ApplicationEvent


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`applicationId` | number
`profileId` | number
`storeId` | number
`storeIntegrationId` | string
`sessionId` | number
`type` | string
`attributes` | object
`effects` | [Array&lt;Effect&gt;](Effect.md)
`ruleFailureReasons` | [Array&lt;RuleFailureReason&gt;](RuleFailureReason.md)

## Example

```typescript
import type { ApplicationEvent } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "applicationId": 322,
  "profileId": 138,
  "storeId": null,
  "storeIntegrationId": STORE-001,
  "sessionId": null,
  "type": null,
  "attributes": null,
  "effects": null,
  "ruleFailureReasons": null,
} satisfies ApplicationEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApplicationEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


