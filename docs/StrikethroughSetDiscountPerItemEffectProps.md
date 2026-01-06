
# StrikethroughSetDiscountPerItemEffectProps

setDiscountPerItem effect in strikethrough pricing payload.

## Properties

Name | Type
------------ | -------------
`name` | string
`value` | any

## Example

```typescript
import type { StrikethroughSetDiscountPerItemEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": 1EuroOff,
  "value": null,
} satisfies StrikethroughSetDiscountPerItemEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrikethroughSetDiscountPerItemEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


