
# DeductLoyaltyPointsEffectProps

The properties specific to the \"deductLoyaltyPoints\" effect. This gets triggered whenever a validated rule contained a condition to only trigger when the given number of loyalty points could be deduced. These points are automatically stored and managed inside Talon.One.

## Properties

Name | Type
------------ | -------------
`ruleTitle` | string
`programId` | number
`subLedgerId` | string
`value` | number
`transactionUUID` | string
`name` | string
`cardIdentifier` | string

## Example

```typescript
import type { DeductLoyaltyPointsEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "ruleTitle": null,
  "programId": null,
  "subLedgerId": null,
  "value": null,
  "transactionUUID": null,
  "name": null,
  "cardIdentifier": summer-loyalty-card-0543,
} satisfies DeductLoyaltyPointsEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeductLoyaltyPointsEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


