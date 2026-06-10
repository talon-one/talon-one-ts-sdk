
# SetDiscountPerItemEffectProps

This effect schema is returned when you use the **Discount individual items**, **Discount individual items pro rata**, or **Discount individual item in bundles** effect in a rule.  It indicates that a discount per item should be applied on the specific item specified in the effect.  The properties it contains depends on:  - Whether you used a pro rata effect or not. - Whether you used an effect with bundles or not. - Whether the partial discount feature is enabled.

## Properties

Name | Type
------------ | -------------
`name` | string
`value` | number
`position` | number
`subPosition` | number
`desiredValue` | number
`scope` | string
`totalDiscount` | number
`desiredTotalDiscount` | number
`bundleIndex` | number
`bundleName` | string
`targetedItemPosition` | number
`targetedItemSubPosition` | number
`excludedFromPriceHistory` | boolean

## Example

```typescript
import type { SetDiscountPerItemEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "value": null,
  "position": null,
  "subPosition": null,
  "desiredValue": null,
  "scope": null,
  "totalDiscount": null,
  "desiredTotalDiscount": null,
  "bundleIndex": null,
  "bundleName": null,
  "targetedItemPosition": null,
  "targetedItemSubPosition": null,
  "excludedFromPriceHistory": null,
} satisfies SetDiscountPerItemEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetDiscountPerItemEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


