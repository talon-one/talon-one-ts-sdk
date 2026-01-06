
# NewWebhook


## Properties

Name | Type
------------ | -------------
`applicationIds` | Array&lt;number&gt;
`title` | string
`description` | string
`draft` | boolean
`verb` | string
`url` | string
`headers` | Array&lt;string&gt;
`payload` | string
`params` | [Array&lt;TemplateArgDef&gt;](TemplateArgDef.md)
`enabled` | boolean
`authenticationId` | number

## Example

```typescript
import type { NewWebhook } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationIds": null,
  "title": Send message,
  "description": A webhook to send a coupon to the user.,
  "draft": false,
  "verb": POST,
  "url": www.my-company.com/my-endpoint-name,
  "headers": [{"Authorization": "Basic bmF2ZWVua3VtYXIU="}, {"Content-Type": "application/json"}],
  "payload": {
	"message": "${message}"
},
  "params": [],
  "enabled": true,
  "authenticationId": 1,
} satisfies NewWebhook

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewWebhook
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


