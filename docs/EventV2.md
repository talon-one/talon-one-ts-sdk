
# EventV2


## Properties

Name | Type
------------ | -------------
`profileId` | string
`storeIntegrationId` | string
`evaluableCampaignIds` | Array&lt;number&gt;
`type` | string
`attributes` | object

## Example

```typescript
import type { EventV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "profileId": URNGV8294NV,
  "storeIntegrationId": STORE-001,
  "evaluableCampaignIds": [10, 12],
  "type": pageViewed,
  "attributes": {myAttribute=myValue},
} satisfies EventV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


