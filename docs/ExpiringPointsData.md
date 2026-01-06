
# ExpiringPointsData


## Properties

Name | Type
------------ | -------------
`expiryDate` | Date
`loyaltyProgramID` | number
`customerProfileID` | string
`amountOfExpiringPoints` | number
`subledgerID` | string

## Example

```typescript
import type { ExpiringPointsData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "expiryDate": null,
  "loyaltyProgramID": 5,
  "customerProfileID": URNGV8294NV,
  "amountOfExpiringPoints": 10.99,
  "subledgerID": sub-123,
} satisfies ExpiringPointsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExpiringPointsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


