
# CustomerProfileIntegrationRequestV2


## Properties

Name | Type
------------ | -------------
`attributes` | object
`evaluableCampaignIds` | Array&lt;number&gt;
`audiencesChanges` | [ProfileAudiencesChanges](ProfileAudiencesChanges.md)
`responseContent` | Array&lt;string&gt;

## Example

```typescript
import type { CustomerProfileIntegrationRequestV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "attributes": {Language=english, ShippingCountry=DE},
  "evaluableCampaignIds": [10, 12],
  "audiencesChanges": null,
  "responseContent": [triggeredCampaigns, customerProfile],
} satisfies CustomerProfileIntegrationRequestV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerProfileIntegrationRequestV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


