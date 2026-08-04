
# AwardDiscountAdditionalCostTarget

Applies the discount to an additional cost. The `target` field determines which subset of cart items the additional cost contribution is applied to.

## Properties

Name | Type
------------ | -------------
`type` | string
`additionalCost` | [AdditionalCostReference](AdditionalCostReference.md)
`target` | [AwardDiscountAdditionalCostTargetTarget](AwardDiscountAdditionalCostTargetTarget.md)

## Example

```typescript
import type { AwardDiscountAdditionalCostTarget } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "additionalCost": null,
  "target": null,
} satisfies AwardDiscountAdditionalCostTarget

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AwardDiscountAdditionalCostTarget
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


