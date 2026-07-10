
# UpdateAchievementProgressBlock1Achievement

The achievement to update.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`title` | string
`target` | number

## Example

```typescript
import type { UpdateAchievementProgressBlock1Achievement } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "name": Order50Discount,
  "title": 50% off on 50th purchase.,
  "target": 50,
} satisfies UpdateAchievementProgressBlock1Achievement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAchievementProgressBlock1Achievement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


