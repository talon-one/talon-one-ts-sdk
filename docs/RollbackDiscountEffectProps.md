
# RollbackDiscountEffectProps

This effect indicates that a discounted session, cart item, or additional cost has been cancelled or partially returned. This effect can only happen when you set the status of a session to `cancel` or the status changes to `partially_returned`.  If the session contains some cart items with _quantity > 1_, use the `cartItemSubPosition` property to identify the specific item unit in its line item. See the example below.

## Properties

Name | Type
------------ | -------------
`name` | string
`value` | number
`cartItemPosition` | number
`cartItemSubPosition` | number
`additionalCostId` | number
`additionalCost` | string
`scope` | string

## Example

```typescript
import type { RollbackDiscountEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "value": null,
  "cartItemPosition": null,
  "cartItemSubPosition": null,
  "additionalCostId": null,
  "additionalCost": null,
  "scope": null,
} satisfies RollbackDiscountEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackDiscountEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


