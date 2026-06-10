
# UpdateAttributeEffectProps

This effect indicates that a rule containing an [Update attribute value](https://docs.talon.one/docs/product/rules/effects/available-effects#update-effects) or [Update cart item attribute value](https://docs.talon.one/docs/product/rules/effects/available-effects#update-effects) was validated. You should update the value of the attribute in your system based on the content of the returned effect.

## Properties

Name | Type
------------ | -------------
`path` | string
`value` | any

## Example

```typescript
import type { UpdateAttributeEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "path": null,
  "value": null,
} satisfies UpdateAttributeEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAttributeEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


