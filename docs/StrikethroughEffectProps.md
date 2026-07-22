
# StrikethroughEffectProps


## Properties

Name | Type
------------ | -------------
`name` | string
`value` | any
`excludedFromPriceHistory` | boolean
`effectId` | number
`payload` | object

## Example

```typescript
import type { StrikethroughEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": 10% off members only,
  "value": null,
  "excludedFromPriceHistory": null,
  "effectId": 1,
  "payload": null,
} satisfies StrikethroughEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrikethroughEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


