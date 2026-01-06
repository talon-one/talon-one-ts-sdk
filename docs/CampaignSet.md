
# CampaignSet


## Properties

Name | Type
------------ | -------------
`applicationId` | number
`id` | number
`version` | number
`set` | [CampaignSetBranchNode](CampaignSetBranchNode.md)
`updatedBy` | string

## Example

```typescript
import type { CampaignSet } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationId": 322,
  "id": 6,
  "version": 3,
  "set": null,
  "updatedBy": Jane Doe,
} satisfies CampaignSet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignSet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


