
# OutgoingIntegrationTemplate


## Properties

Name | Type
------------ | -------------
`id` | number
`integrationType` | number
`title` | string
`description` | string
`payload` | string
`method` | string
`relativeUrl` | string
`headers` | Array&lt;string&gt;

## Example

```typescript
import type { OutgoingIntegrationTemplate } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "integrationType": 2,
  "title": Email coupon codes,
  "description": This template sends a coupon code to the specified audience by email.,
  "payload": {
	"message": "${message}"
},
  "method": POST,
  "relativeUrl": /campaigns/trigger/send,
  "headers": [{"Content-Type": "application/json"}],
} satisfies OutgoingIntegrationTemplate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutgoingIntegrationTemplate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


