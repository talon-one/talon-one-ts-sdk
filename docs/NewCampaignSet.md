
# NewCampaignSet


## Properties

Name | Type
------------ | -------------
`applicationId` | number
`version` | number
`set` | [CampaignSetBranchNode](CampaignSetBranchNode.md)

## Example

```typescript
import type { NewCampaignSet } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationId": 322,
  "version": 2,
  "set": null,
} satisfies NewCampaignSet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCampaignSet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


