
# NewOutgoingIntegrationWebhook


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`applicationIds` | Array&lt;number&gt;

## Example

```typescript
import type { NewOutgoingIntegrationWebhook } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": Send email to customer via Braze,
  "description": A webhook to send a coupon to the user.,
  "applicationIds": [1, 2, 3],
} satisfies NewOutgoingIntegrationWebhook

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewOutgoingIntegrationWebhook
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


