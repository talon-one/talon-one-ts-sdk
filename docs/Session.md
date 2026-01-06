
# Session


## Properties

Name | Type
------------ | -------------
`userId` | number
`token` | string
`created` | Date

## Example

```typescript
import type { Session } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": 109,
  "token": dy_Fa_lQ4iDAnqldJFvVEmnsN8xDTxej19l0LZDBJhQ,
  "created": 2021-07-20T22:00:00Z,
} satisfies Session

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Session
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


