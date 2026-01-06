
# AudienceAnalytics

The audiences and their member count.

## Properties

Name | Type
------------ | -------------
`audienceId` | number
`membersCount` | number

## Example

```typescript
import type { AudienceAnalytics } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "audienceId": 1,
  "membersCount": 1234,
} satisfies AudienceAnalytics

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudienceAnalytics
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


