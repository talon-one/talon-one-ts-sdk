
# EventType


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`title` | string
`name` | string
`description` | string

## Example

```typescript
import type { EventType } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "title": Survey Completed,
  "name": surveyCompleted,
  "description": The survey was submitted by the customer.,
} satisfies EventType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


