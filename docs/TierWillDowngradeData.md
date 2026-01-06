
# TierWillDowngradeData


## Properties

Name | Type
------------ | -------------
`customerProfileID` | string
`loyaltyProgramID` | number
`subledgerID` | string
`currentTier` | string
`currentPoints` | number
`pointsRequiredToRemain` | number
`nextTier` | string
`tierExpirationDate` | Date

## Example

```typescript
import type { TierWillDowngradeData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "customerProfileID": URNGV8294NV,
  "loyaltyProgramID": 5,
  "subledgerID": SL001,
  "currentTier": Silver,
  "currentPoints": 120.55,
  "pointsRequiredToRemain": 23.51,
  "nextTier": Bronze,
  "tierExpirationDate": 2023-12-01T12:23:00+02:00,
} satisfies TierWillDowngradeData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TierWillDowngradeData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


