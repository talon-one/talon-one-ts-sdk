
# WebhookAuthenticationBaseCustom

Authenticates the webhook with a custom set of HTTP headers.

## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`data` | [WebhookAuthenticationDataCustom](WebhookAuthenticationDataCustom.md)

## Example

```typescript
import type { WebhookAuthenticationBaseCustom } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": My custom auth,
  "type": null,
  "data": null,
} satisfies WebhookAuthenticationBaseCustom

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookAuthenticationBaseCustom
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


