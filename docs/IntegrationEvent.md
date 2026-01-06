
# IntegrationEvent


## Properties

Name | Type
------------ | -------------
`profileId` | string
`storeIntegrationId` | string
`type` | string
`attributes` | object

## Example

```typescript
import type { IntegrationEvent } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "profileId": URNGV8294NV,
  "storeIntegrationId": STORE-001,
  "type": pageViewed,
  "attributes": {myAttribute=myValue},
} satisfies IntegrationEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


