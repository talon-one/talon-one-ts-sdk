
# CreateReferralBlock


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`campaignId` | [CreateReferralBlock1CampaignId](CreateReferralBlock1CampaignId.md)
`friendId` | string
`storeInSession` | boolean
`usageLimit` | [CreateReferralBlock1UsageLimit](CreateReferralBlock1UsageLimit.md)
`startDate` | any
`expiryDate` | any
`attributes` | any
`validCharacters` | string
`pattern` | string

## Example

```typescript
import type { CreateReferralBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "campaignId": null,
  "friendId": {{$Profile.IntegrationId}},
  "storeInSession": true,
  "usageLimit": null,
  "startDate": 2024-12-24T14:15:22Z,
  "expiryDate": 2024-12-24T14:15:22Z,
  "attributes": null,
  "validCharacters": ABC,
  "pattern": SUMMER-####-####,
} satisfies CreateReferralBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateReferralBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


