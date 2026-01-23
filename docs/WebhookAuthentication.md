
# WebhookAuthentication


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`modified` | Date
`createdBy` | string
`modifiedBy` | string
`webhooks` | [Array&lt;WebhookAuthenticationWebhookRef&gt;](WebhookAuthenticationWebhookRef.md)
`name` | string
`type` | string
`data` | any

## Example

```typescript
import type { WebhookAuthentication } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "modified": 2021-09-12T10:12:42Z,
  "createdBy": null,
  "modifiedBy": null,
  "webhooks": null,
  "name": My basic auth,
  "type": null,
  "data": null,
} satisfies WebhookAuthentication

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookAuthentication
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


