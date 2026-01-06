
# CampaignVersions


## Properties

Name | Type
------------ | -------------
`revisionFrontendState` | string
`activeRevisionId` | number
`activeRevisionVersionId` | number
`version` | number
`currentRevisionId` | number
`currentRevisionVersionId` | number
`stageRevision` | boolean

## Example

```typescript
import type { CampaignVersions } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "revisionFrontendState": revised,
  "activeRevisionId": 6,
  "activeRevisionVersionId": 6,
  "version": 6,
  "currentRevisionId": 6,
  "currentRevisionVersionId": 6,
  "stageRevision": false,
} satisfies CampaignVersions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignVersions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


