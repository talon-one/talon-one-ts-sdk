
# SetDiscountPerAdditionalCostEffectProps

The properties specific to the \"setDiscountPerAdditionalCost\" effect. This gets triggered whenever a validated rule contained a \"set per additional cost discount\" effect. This is a discount that should be applied on a specific additional cost.

## Properties

Name | Type
------------ | -------------
`name` | string
`additionalCostId` | number
`additionalCost` | string
`value` | number
`desiredValue` | number

## Example

```typescript
import type { SetDiscountPerAdditionalCostEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "additionalCostId": null,
  "additionalCost": null,
  "value": null,
  "desiredValue": null,
} satisfies SetDiscountPerAdditionalCostEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetDiscountPerAdditionalCostEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


