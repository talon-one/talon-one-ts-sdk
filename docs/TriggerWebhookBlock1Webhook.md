
# TriggerWebhookBlock1Webhook

The webhook to trigger.

## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string

## Example

```typescript
import type { TriggerWebhookBlock1Webhook } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "title": Thank you for your order.,
} satisfies TriggerWebhookBlock1Webhook

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TriggerWebhookBlock1Webhook
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


