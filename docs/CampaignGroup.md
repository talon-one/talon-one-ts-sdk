
# CampaignGroup


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`modified` | Date
`accountId` | number
`name` | string
`description` | string
`subscribedApplicationsIds` | Array&lt;number&gt;
`campaignIds` | Array&lt;number&gt;

## Example

```typescript
import type { CampaignGroup } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "modified": 2021-09-12T10:12:42Z,
  "accountId": 3886,
  "name": Europe access group,
  "description": A group that gives access to all the campaigns for the Europe market.,
  "subscribedApplicationsIds": [1, 2, 3],
  "campaignIds": [4, 6, 8],
} satisfies CampaignGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


