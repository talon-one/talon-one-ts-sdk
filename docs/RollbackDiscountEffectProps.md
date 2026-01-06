
# RollbackDiscountEffectProps

The properties specific to the \"rollbackDiscount\" effect. This gets triggered whenever previously closed session is now cancelled or partially returned and a setDiscount effect was cancelled on our internal discount limit counters.

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


