
# ApplicationReferee


## Properties

Name | Type
------------ | -------------
`applicationId` | number
`sessionId` | string
`advocateIntegrationId` | string
`friendIntegrationId` | string
`code` | string
`created` | Date

## Example

```typescript
import type { ApplicationReferee } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationId": 322,
  "sessionId": null,
  "advocateIntegrationId": null,
  "friendIntegrationId": null,
  "code": null,
  "created": null,
} satisfies ApplicationReferee

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApplicationReferee
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


