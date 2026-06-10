
# SetDiscountEffectProps

This effect indicates that a discount should be set on the total shopping cart value of the current order with the given label and amount.  The discount should overwrite any existing discount with the same name. The most recent integration state update always returns the latest values for **all** effects, effectively overwriting any previous effects.  Enabling [partial discounts](https://docs.talon.one/docs/product/applications/manage-general-settings#partial-discounts) allows a rule that would fail because of insufficient budget to pass. The rule still fails when the budget reaches `0`. Use the `desiredValue` property to identify the original value of the discount.

## Properties

Name | Type
------------ | -------------
`name` | string
`value` | number
`scope` | string
`desiredValue` | number

## Example

```typescript
import type { SetDiscountEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "value": null,
  "scope": null,
  "desiredValue": null,
} satisfies SetDiscountEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetDiscountEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


