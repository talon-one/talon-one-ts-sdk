
# AddedDeductedPointsNotification


## Properties

Name | Type
------------ | -------------
`profileIntegrationID` | string
`loyaltyProgramID` | number
`subledgerID` | string
`amount` | number
`reason` | string
`typeOfChange` | string
`employeeName` | string
`userID` | number
`operation` | string
`startDate` | Date
`expiryDate` | Date
`sessionIntegrationID` | string
`notificationType` | string

## Example

```typescript
import type { AddedDeductedPointsNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "profileIntegrationID": URNGV8294NV,
  "loyaltyProgramID": 5,
  "subledgerID": sub-123,
  "amount": 10.99,
  "reason": Compensation,
  "typeOfChange": null,
  "employeeName": Franziska Schneider,
  "userID": 25,
  "operation": null,
  "startDate": 2023-01-24T14:15:22Z,
  "expiryDate": 2024-01-24T14:15:22Z,
  "sessionIntegrationID": cc53e4fa-547f-4f5e-8333-76e05c381f67,
  "notificationType": null,
} satisfies AddedDeductedPointsNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddedDeductedPointsNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


