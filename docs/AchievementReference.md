
# AchievementReference


## Properties

Name | Type
------------ | -------------
`achievementId` | number
`applicationId` | number
`applicationName` | string
`campaignId` | number

## Example

```typescript
import type { AchievementReference } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "achievementId": 12,
  "applicationId": 101,
  "applicationName": North America Storefront,
  "campaignId": 4501,
} satisfies AchievementReference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AchievementReference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


