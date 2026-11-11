
# WebhookAuthenticationBasic

A webhook authentication that uses Basic HTTP authentication.

## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`data` | [WebhookAuthenticationDataBasic](WebhookAuthenticationDataBasic.md)
`createdBy` | string
`modifiedBy` | string
`webhooks` | [Array&lt;WebhookAuthenticationWebhookRef&gt;](WebhookAuthenticationWebhookRef.md)
`id` | number
`created` | Date
`modified` | Date

## Example

```typescript
import type { WebhookAuthenticationBasic } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": My basic auth,
  "type": null,
  "data": null,
  "createdBy": null,
  "modifiedBy": null,
  "webhooks": null,
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "modified": 2021-09-12T10:12:42Z,
} satisfies WebhookAuthenticationBasic

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookAuthenticationBasic
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


