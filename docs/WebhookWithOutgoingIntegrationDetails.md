
# WebhookWithOutgoingIntegrationDetails


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`modified` | Date
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
`outgoingIntegrationTemplateId` | number
`outgoingIntegrationTypeId` | number
`outgoingIntegrationTypeName` | string

## Example

```typescript
import type { WebhookWithOutgoingIntegrationDetails } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "modified": 2021-09-12T10:12:42Z,
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
  "outgoingIntegrationTemplateId": 1,
  "outgoingIntegrationTypeId": 1,
  "outgoingIntegrationTypeName": Braze,
} satisfies WebhookWithOutgoingIntegrationDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookWithOutgoingIntegrationDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


