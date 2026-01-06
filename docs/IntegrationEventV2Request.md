
# IntegrationEventV2Request


## Properties

Name | Type
------------ | -------------
`profileId` | string
`storeIntegrationId` | string
`evaluableCampaignIds` | Array&lt;number&gt;
`type` | string
`attributes` | object
`loyaltyCards` | Array&lt;string&gt;
`responseContent` | Array&lt;string&gt;

## Example

```typescript
import type { IntegrationEventV2Request } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "profileId": URNGV8294NV,
  "storeIntegrationId": STORE-001,
  "evaluableCampaignIds": [10, 12],
  "type": pageViewed,
  "attributes": {myAttribute=myValue},
  "loyaltyCards": [loyalty-card-1],
  "responseContent": [triggeredCampaigns, customerProfile],
} satisfies IntegrationEventV2Request

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationEventV2Request
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


