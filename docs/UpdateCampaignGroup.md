
# UpdateCampaignGroup


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`subscribedApplicationsIds` | Array&lt;number&gt;
`campaignIds` | Array&lt;number&gt;

## Example

```typescript
import type { UpdateCampaignGroup } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Europe access group,
  "description": A group that gives access to all the campaigns for the Europe market.,
  "subscribedApplicationsIds": [1, 2, 3],
  "campaignIds": [4, 6, 8],
} satisfies UpdateCampaignGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCampaignGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


