
# AddedDeductedPointsBalancesNotification


## Properties

Name | Type
------------ | -------------
`employeeName` | string
`loyaltyProgramID` | number
`notificationType` | string
`profileIntegrationID` | string
`sessionIntegrationID` | string
`subledgerID` | string
`typeOfChange` | string
`userID` | number
`actions` | [Array&lt;AddedDeductedPointsBalancesAction&gt;](AddedDeductedPointsBalancesAction.md)
`currentPoints` | number

## Example

```typescript
import type { AddedDeductedPointsBalancesNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "employeeName": Franziska Schneider,
  "loyaltyProgramID": 5,
  "notificationType": null,
  "profileIntegrationID": URNGV8294NV,
  "sessionIntegrationID": cc53e4fa-547f-4f5e-8333-76e05c381f67,
  "subledgerID": sub-123,
  "typeOfChange": null,
  "userID": 25,
  "actions": null,
  "currentPoints": 10.99,
} satisfies AddedDeductedPointsBalancesNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddedDeductedPointsBalancesNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


