
# PendingActivePointsData


## Properties

Name | Type
------------ | -------------
`loyaltyProgramID` | number
`subledgerID` | string
`customerProfileID` | string
`points` | number
`activeOn` | Date
`expireOn` | Date
`sessionIntegrationID` | string

## Example

```typescript
import type { PendingActivePointsData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "loyaltyProgramID": 5,
  "subledgerID": SL001,
  "customerProfileID": URNGV8294NV,
  "points": 10.99,
  "activeOn": 2023-08-20T12:22:00+02:00,
  "expireOn": 2023-09-01T12:23:00+02:00,
  "sessionIntegrationID": cc53e4fa-547f-4f5e-8333-76e05c381f67,
} satisfies PendingActivePointsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingActivePointsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


