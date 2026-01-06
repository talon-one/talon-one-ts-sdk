
# AddFreeItemEffectProps

The properties specific to the \"addFreeItem\" effect. This gets triggered whenever a validated rule contained an \"add free item\" effect.

## Properties

Name | Type
------------ | -------------
`sku` | string
`name` | string
`desiredQuantity` | number

## Example

```typescript
import type { AddFreeItemEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "sku": SKU1241028,
  "name": null,
  "desiredQuantity": null,
} satisfies AddFreeItemEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddFreeItemEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


