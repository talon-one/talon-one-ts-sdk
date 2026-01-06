
# ExpiringCardPointsData


## Properties

Name | Type
------------ | -------------
`expiryDate` | Date
`loyaltyProgramID` | number
`amountOfExpiringPoints` | number
`subledgerID` | string
`cardIdentifier` | string
`usersPerCardLimit` | number
`profiles` | Array&lt;string&gt;

## Example

```typescript
import type { ExpiringCardPointsData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "expiryDate": null,
  "loyaltyProgramID": 5,
  "amountOfExpiringPoints": 10.99,
  "subledgerID": sub-123,
  "cardIdentifier": summer-loyalty-card-0543,
  "usersPerCardLimit": 5,
  "profiles": null,
} satisfies ExpiringCardPointsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExpiringCardPointsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


