
# OktaEvent

Single event definition in the event data emitted by Okta.

## Properties

Name | Type
------------ | -------------
`eventType` | string
`target` | [Array&lt;OktaEventTarget&gt;](OktaEventTarget.md)

## Example

```typescript
import type { OktaEvent } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "eventType": application.user_membership.add,
  "target": null,
} satisfies OktaEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OktaEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


