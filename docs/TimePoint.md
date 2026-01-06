
# TimePoint

The absolute duration after which the achievement ends and resets for a particular customer profile.  **Note**: The duration follows the time zone of the Application this achievement belongs to. 

## Properties

Name | Type
------------ | -------------
`month` | number
`dayOfMonth` | number
`dayOfWeek` | number
`hour` | number
`minute` | number
`second` | number

## Example

```typescript
import type { TimePoint } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "month": 11,
  "dayOfMonth": 23,
  "dayOfWeek": null,
  "hour": 23,
  "minute": 59,
  "second": 59,
} satisfies TimePoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimePoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


