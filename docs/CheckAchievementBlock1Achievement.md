
# CheckAchievementBlock1Achievement

The achievement to check for.

## Properties

Name | Type
------------ | -------------
`id` | number
`title` | string
`name` | string
`target` | number

## Example

```typescript
import type { CheckAchievementBlock1Achievement } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "title": 50% off on 50th purchase.,
  "name": Order50Discount,
  "target": 50,
} satisfies CheckAchievementBlock1Achievement

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckAchievementBlock1Achievement
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


