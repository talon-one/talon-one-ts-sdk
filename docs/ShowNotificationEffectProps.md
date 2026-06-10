
# ShowNotificationEffectProps

You can use notifications to inform customers of certain events. There are four types of notification messages:  - `Info` - `Offer` - `Error` - `Misc`  It is up to you to use the Rule Builder to decide why and when to show notifications. Notifications can be used as both rule effects and failure effects.  A common use case is to display the notification at the top of the cart view in your web app. You can use the notification type to vary the styling of the notification message.

## Properties

Name | Type
------------ | -------------
`notificationType` | string
`title` | string
`body` | string

## Example

```typescript
import type { ShowNotificationEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "notificationType": null,
  "title": null,
  "body": null,
} satisfies ShowNotificationEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ShowNotificationEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


