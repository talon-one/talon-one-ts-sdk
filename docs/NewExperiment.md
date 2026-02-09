
# NewExperiment


## Properties

Name | Type
------------ | -------------
`isVariantAssignmentExternal` | boolean
`activated` | Date
`state` | string
`campaign` | [NewCampaign](NewCampaign.md)

## Example

```typescript
import type { NewExperiment } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "isVariantAssignmentExternal": null,
  "activated": null,
  "state": enabled,
  "campaign": null,
} satisfies NewExperiment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewExperiment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


