
# UpdateApplicationCIF


## Properties

Name | Type
------------ | -------------
`description` | string
`activeExpressionId` | number
`modifiedBy` | number
`modified` | Date

## Example

```typescript
import type { UpdateApplicationCIF } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "description": This filter allows filtering by shoes,
  "activeExpressionId": 1,
  "modifiedBy": 334,
  "modified": null,
} satisfies UpdateApplicationCIF

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateApplicationCIF
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


