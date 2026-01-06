
# WebhookAuthenticationWebhookRef


## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`description` | string

## Example

```typescript
import type { WebhookAuthenticationWebhookRef } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "title": Send message,
  "description": A webhook to send a coupon to the user.,
} satisfies WebhookAuthenticationWebhookRef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookAuthenticationWebhookRef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


