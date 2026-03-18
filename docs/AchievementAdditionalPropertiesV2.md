
# AchievementAdditionalPropertiesV2


## Properties

Name | Type
------------ | -------------
`userId` | number
`createdBy` | string
`hasProgress` | boolean
`status` | string

## Example

```typescript
import type { AchievementAdditionalPropertiesV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": 1234,
  "createdBy": John Doe,
  "hasProgress": null,
  "status": inprogress,
} satisfies AchievementAdditionalPropertiesV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AchievementAdditionalPropertiesV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


