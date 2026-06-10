
# TriggerWebhookEffectProps

This effect is triggered when a rule containing a [webhook effect](https://docs.talon.one/docs/product/rules/effects/available-effects#webhooks) is validated. The details are shared with you for your information only. It usually doesn\'t require an action on your side.

## Properties

Name | Type
------------ | -------------
`webhookId` | number
`webhookName` | string

## Example

```typescript
import type { TriggerWebhookEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "webhookId": null,
  "webhookName": null,
} satisfies TriggerWebhookEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TriggerWebhookEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


