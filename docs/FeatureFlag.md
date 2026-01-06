
# FeatureFlag


## Properties

Name | Type
------------ | -------------
`name` | string
`value` | string
`created` | Date
`modified` | Date

## Example

```typescript
import type { FeatureFlag } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": canCreateCampaignFromTemplate,
  "value": true,
  "created": 2021-09-22T12:24:14.956203Z,
  "modified": 2021-09-25T10:34:12.956203Z,
} satisfies FeatureFlag

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FeatureFlag
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


