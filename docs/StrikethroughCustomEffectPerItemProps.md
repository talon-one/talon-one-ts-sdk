
# StrikethroughCustomEffectPerItemProps

customEffectPerItem effect in strikethrough pricing payload.

## Properties

Name | Type
------------ | -------------
`effectId` | number
`name` | string
`payload` | object

## Example

```typescript
import type { StrikethroughCustomEffectPerItemProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "effectId": 1,
  "name": my_custom_effect,
  "payload": null,
} satisfies StrikethroughCustomEffectPerItemProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrikethroughCustomEffectPerItemProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


