
# LoyaltyBalanceWithTier


## Properties

Name | Type
------------ | -------------
`activePoints` | number
`pendingPoints` | number
`spentPoints` | number
`expiredPoints` | number
`negativePoints` | number
`currentTier` | [Tier](Tier.md)
`projectedTier` | [ProjectedTier](ProjectedTier.md)
`pointsToNextTier` | number
`nextTierName` | string

## Example

```typescript
import type { LoyaltyBalanceWithTier } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "activePoints": 286,
  "pendingPoints": 50,
  "spentPoints": 150,
  "expiredPoints": 286,
  "negativePoints": 286,
  "currentTier": null,
  "projectedTier": null,
  "pointsToNextTier": 20,
  "nextTierName": silver,
} satisfies LoyaltyBalanceWithTier

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyBalanceWithTier
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


