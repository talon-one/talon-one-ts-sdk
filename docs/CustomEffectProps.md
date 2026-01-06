
# CustomEffectProps

Effect containing custom payload.

## Properties

Name | Type
------------ | -------------
`effectId` | number
`name` | string
`cartItemPosition` | number
`cartItemSubPosition` | number
`bundleIndex` | number
`bundleName` | string
`payload` | object

## Example

```typescript
import type { CustomEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "effectId": 1,
  "name": my_custom_effect,
  "cartItemPosition": 1,
  "cartItemSubPosition": 2,
  "bundleIndex": 1,
  "bundleName": my_bundle,
  "payload": null,
} satisfies CustomEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


