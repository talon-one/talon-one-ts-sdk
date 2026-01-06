
# ProjectedTier


## Properties

Name | Type
------------ | -------------
`projectedActivePoints` | number
`stayInTierPoints` | number
`projectedTierName` | string

## Example

```typescript
import type { ProjectedTier } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "projectedActivePoints": 198,
  "stayInTierPoints": 2,
  "projectedTierName": Tier 1,
} satisfies ProjectedTier

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProjectedTier
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


