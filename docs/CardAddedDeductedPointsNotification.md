
# CardAddedDeductedPointsNotification


## Properties

Name | Type
------------ | -------------
`cardIdentifier` | string
`employeeName` | string
`loyaltyProgramID` | number
`notificationType` | string
`profileIntegrationIDs` | Array&lt;string&gt;
`sessionIntegrationID` | string
`subledgerID` | string
`typeOfChange` | string
`userID` | number
`usersPerCardLimit` | number
`amount` | number
`expiryDate` | Date
`operation` | string
`reason` | string
`startDate` | Date

## Example

```typescript
import type { CardAddedDeductedPointsNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "cardIdentifier": 123-456-789ATBC,
  "employeeName": Franziska Schneider,
  "loyaltyProgramID": 5,
  "notificationType": null,
  "profileIntegrationIDs": ["yJSObdNNtOetCHWHPFuz","test-user-4zoj1c"],
  "sessionIntegrationID": cc53e4fa-547f-4f5e-8333-76e05c381f67,
  "subledgerID": sub-123,
  "typeOfChange": null,
  "userID": 25,
  "usersPerCardLimit": 10,
  "amount": 10.99,
  "expiryDate": 2024-01-24T14:15:22Z,
  "operation": null,
  "reason": Compensation,
  "startDate": 2023-01-24T14:15:22Z,
} satisfies CardAddedDeductedPointsNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CardAddedDeductedPointsNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


