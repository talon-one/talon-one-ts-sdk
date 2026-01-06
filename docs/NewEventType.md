
# NewEventType


## Properties

Name | Type
------------ | -------------
`title` | string
`name` | string
`description` | string

## Example

```typescript
import type { NewEventType } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": Survey Completed,
  "name": surveyCompleted,
  "description": The survey was submitted by the customer.,
} satisfies NewEventType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewEventType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


