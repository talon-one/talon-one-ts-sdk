
# NewMessageTest


## Properties

Name | Type
------------ | -------------
`headers` | { [key: string]: string; }
`verb` | string
`url` | string
`payload` | string
`params` | [Array&lt;TemplateArgDef&gt;](TemplateArgDef.md)
`applicationIds` | Array&lt;number&gt;
`authenticationId` | number

## Example

```typescript
import type { NewMessageTest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "headers": {"content-type":"application/json"},
  "verb": POST,
  "url": www.my-company.com/my-endpoint-name,
  "payload": {
	"integrationId": "${$Profile.IntegrationId}"
},
  "params": [],
  "applicationIds": null,
  "authenticationId": 1,
} satisfies NewMessageTest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewMessageTest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


