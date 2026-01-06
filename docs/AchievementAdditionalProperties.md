
# AchievementAdditionalProperties


## Properties

Name | Type
------------ | -------------
`campaignId` | number
`userId` | number
`createdBy` | string
`hasProgress` | boolean
`status` | string

## Example

```typescript
import type { AchievementAdditionalProperties } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignId": 1,
  "userId": 1234,
  "createdBy": John Doe,
  "hasProgress": null,
  "status": inprogress,
} satisfies AchievementAdditionalProperties

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AchievementAdditionalProperties
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


