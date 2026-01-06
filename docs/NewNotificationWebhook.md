
# NewNotificationWebhook


## Properties

Name | Type
------------ | -------------
`url` | string
`headers` | Array&lt;string&gt;
`enabled` | boolean

## Example

```typescript
import type { NewNotificationWebhook } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "url": www.my-company.com/my-endpoint-name,
  "headers": null,
  "enabled": true,
} satisfies NewNotificationWebhook

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewNotificationWebhook
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


