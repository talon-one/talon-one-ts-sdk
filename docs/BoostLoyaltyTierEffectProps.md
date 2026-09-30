
# BoostLoyaltyTierEffectProps

Properties returned when a rule triggers a `boostLoyaltyTier` effect. The customer is temporarily placed in a higher loyalty tier for a specified period without any change to their points balance. 

## Properties

Name | Type
------------ | -------------
`programId` | number
`subLedgerId` | string
`tierName` | string
`reason` | string
`expiryDate` | Date
`boostUuid` | string

## Example

```typescript
import type { BoostLoyaltyTierEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "programId": null,
  "subLedgerId": null,
  "tierName": null,
  "reason": null,
  "expiryDate": null,
  "boostUuid": 27b16dbb-fbc7-4c02-99b1-b21b8a94c186,
} satisfies BoostLoyaltyTierEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BoostLoyaltyTierEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


