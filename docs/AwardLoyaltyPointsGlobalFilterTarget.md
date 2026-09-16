
# AwardLoyaltyPointsGlobalFilterTarget

Awards points per item in a globally filtered subset of items.

## Properties

Name | Type
------------ | -------------
`type` | string
`name` | string

## Example

```typescript
import type { AwardLoyaltyPointsGlobalFilterTarget } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "name": PremiumItems,
} satisfies AwardLoyaltyPointsGlobalFilterTarget

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AwardLoyaltyPointsGlobalFilterTarget
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


