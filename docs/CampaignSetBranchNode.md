
# CampaignSetBranchNode


## Properties

Name | Type
------------ | -------------
`type` | string
`name` | string
`operator` | string
`elements` | [Array&lt;CampaignSetNode&gt;](CampaignSetNode.md)
`groupId` | number
`locked` | boolean
`description` | string
`evaluationMode` | string
`evaluationScope` | string

## Example

```typescript
import type { CampaignSetBranchNode } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": SET,
  "name": name,
  "operator": ALL,
  "elements": null,
  "groupId": null,
  "locked": null,
  "description": null,
  "evaluationMode": null,
  "evaluationScope": null,
} satisfies CampaignSetBranchNode

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignSetBranchNode
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


