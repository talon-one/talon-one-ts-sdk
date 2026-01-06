
# CampaignCopy


## Properties

Name | Type
------------ | -------------
`name` | string
`applicationIds` | Array&lt;number&gt;
`description` | string
`startTime` | Date
`endTime` | Date
`tags` | Array&lt;string&gt;
`evaluationGroupId` | number

## Example

```typescript
import type { CampaignCopy } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Copy of Summer promotions,
  "applicationIds": [1, 2, 3],
  "description": Campaign for all summer 2021 promotions,
  "startTime": 2021-06-01T09:00:27.993483Z,
  "endTime": 2021-09-10T01:00:00.993483Z,
  "tags": [Summer, Shoes],
  "evaluationGroupId": 2,
} satisfies CampaignCopy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignCopy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


