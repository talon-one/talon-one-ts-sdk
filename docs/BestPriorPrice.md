
# BestPriorPrice


## Properties

Name | Type
------------ | -------------
`sku` | string
`observedAt` | Date
`contextId` | string
`price` | number
`metadata` | [BestPriorPriceMetadata](BestPriorPriceMetadata.md)
`target` | object

## Example

```typescript
import type { BestPriorPrice } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "sku": NVR-GN-GV-UUP,
  "observedAt": 2020-11-10T23:00:00Z,
  "contextId": Summer Sale 2007,
  "price": 99.99,
  "metadata": null,
  "target": null,
} satisfies BestPriorPrice

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BestPriorPrice
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


