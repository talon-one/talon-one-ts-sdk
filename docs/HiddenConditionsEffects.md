
# HiddenConditionsEffects

Contains information about hidden conditions and effects in the Application.

## Properties

Name | Type
------------ | -------------
`builtInEffects` | Array&lt;string&gt;
`conditions` | Array&lt;string&gt;
`customEffects` | Array&lt;number&gt;
`webhooks` | Array&lt;number&gt;

## Example

```typescript
import type { HiddenConditionsEffects } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "builtInEffects": ["addFreeItem","createNotification"],
  "conditions": ["checkAttributeValue","couponCodeIsValid"],
  "customEffects": [1,2],
  "webhooks": [3,4],
} satisfies HiddenConditionsEffects

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HiddenConditionsEffects
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


