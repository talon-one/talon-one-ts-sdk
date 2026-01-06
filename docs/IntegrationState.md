
# IntegrationState

Contains all state that might interest application integration plugins. This is the response type returned by all of the Integration API operations. 

## Properties

Name | Type
------------ | -------------
`session` | [CustomerSession](CustomerSession.md)
`profile` | [CustomerProfile](CustomerProfile.md)
`event` | [Event](Event.md)
`loyalty` | [Loyalty](Loyalty.md)
`coupon` | [Coupon](Coupon.md)

## Example

```typescript
import type { IntegrationState } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "session": null,
  "profile": null,
  "event": null,
  "loyalty": null,
  "coupon": null,
} satisfies IntegrationState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


