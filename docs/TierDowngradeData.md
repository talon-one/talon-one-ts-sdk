
# TierDowngradeData


## Properties

Name | Type
------------ | -------------
`customerProfileID` | string
`loyaltyProgramID` | number
`subledgerID` | string
`currentTier` | string
`currentPoints` | number
`oldTier` | string
`tierExpirationDate` | Date
`timestampOfTierChange` | Date

## Example

```typescript
import type { TierDowngradeData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "customerProfileID": URNGV8294NV,
  "loyaltyProgramID": 5,
  "subledgerID": SL001,
  "currentTier": Silver,
  "currentPoints": 120.55,
  "oldTier": Gold,
  "tierExpirationDate": 2023-12-01T12:23:00+02:00,
  "timestampOfTierChange": 2023-10-26T12:23:00+02:00,
} satisfies TierDowngradeData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TierDowngradeData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


