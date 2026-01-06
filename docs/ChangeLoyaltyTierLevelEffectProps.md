
# ChangeLoyaltyTierLevelEffectProps

The properties specific to the \"changeLoyaltyTierLevel\" effect. This is triggered whenever the user\'s loyalty tier is upgraded due to a validated rule that contained an \"addLoyaltyPoints\" effect. 

## Properties

Name | Type
------------ | -------------
`ruleTitle` | string
`programId` | number
`subLedgerId` | string
`previousTierName` | string
`newTierName` | string
`expiryDate` | Date

## Example

```typescript
import type { ChangeLoyaltyTierLevelEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "ruleTitle": null,
  "programId": null,
  "subLedgerId": null,
  "previousTierName": null,
  "newTierName": null,
  "expiryDate": null,
} satisfies ChangeLoyaltyTierLevelEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChangeLoyaltyTierLevelEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


