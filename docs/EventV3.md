
# EventV3


## Properties

Name | Type
------------ | -------------
`connectedSessionId` | string
`id` | number
`created` | Date
`applicationId` | number
`profileId` | string
`storeIntegrationId` | string
`type` | string
`attributes` | object
`integrationId` | string
`effects` | Array&lt;object&gt;

## Example

```typescript
import type { EventV3 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "connectedSessionId": 175KJPS947296,
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "applicationId": 322,
  "profileId": URNGV8294NV,
  "storeIntegrationId": STORE-001,
  "type": pageViewed,
  "attributes": {myAttribute=myValue},
  "integrationId": 175KJPS947296,
  "effects": null,
} satisfies EventV3

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventV3
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


