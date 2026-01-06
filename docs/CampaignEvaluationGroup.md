
# CampaignEvaluationGroup


## Properties

Name | Type
------------ | -------------
`applicationId` | number
`name` | string
`parentId` | number
`description` | string
`evaluationMode` | string
`evaluationScope` | string
`locked` | boolean
`id` | number

## Example

```typescript
import type { CampaignEvaluationGroup } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationId": 322,
  "name": Summer campaigns,
  "parentId": 2,
  "description": This campaign evaluation group contains all campaigns that are running in the summer.,
  "evaluationMode": null,
  "evaluationScope": null,
  "locked": false,
  "id": 6,
} satisfies CampaignEvaluationGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignEvaluationGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


