
# SetDiscountPerAdditionalCostPerItemEffectProps

This effect indicates that a discount of a specific additional cost within a specific item should be applied. It gets triggered whenever a rule containing a **Discount additional cost per item** effect is validated.  Use this effect when **all** items in the cart have an additional cost. If one of more items do not have an additional cost, the rule will fail.

## Properties

Name | Type
------------ | -------------
`name` | string
`additionalCostId` | number
`value` | number
`position` | number
`subPosition` | number
`additionalCost` | string
`desiredValue` | number

## Example

```typescript
import type { SetDiscountPerAdditionalCostPerItemEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "additionalCostId": null,
  "value": null,
  "position": null,
  "subPosition": null,
  "additionalCost": null,
  "desiredValue": null,
} satisfies SetDiscountPerAdditionalCostPerItemEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetDiscountPerAdditionalCostPerItemEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


