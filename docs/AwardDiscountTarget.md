
# AwardDiscountTarget

Identifies the scope a discount applies to. The `type` field selects the concrete target variant.

## Properties

Name | Type
------------ | -------------
`type` | string
`prorated` | boolean
`name` | string
`item` | [AwardDiscountBundleItem](AwardDiscountBundleItem.md)
`additionalCost` | [AdditionalCostReference](AdditionalCostReference.md)
`target` | [AwardDiscountAdditionalCostTargetTarget](AwardDiscountAdditionalCostTargetTarget.md)

## Example

```typescript
import type { AwardDiscountTarget } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "prorated": false,
  "name": BogoBundle,
  "item": null,
  "additionalCost": null,
  "target": null,
} satisfies AwardDiscountTarget

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AwardDiscountTarget
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


