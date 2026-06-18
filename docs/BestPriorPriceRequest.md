
# BestPriorPriceRequest


## Properties

Name | Type
------------ | -------------
`skus` | Array&lt;string&gt;
`timeframeEndDate` | Date
`timeframe` | string
`timeframeEndDateType` | string
`target` | [BestPriorTarget](BestPriorTarget.md)

## Example

```typescript
import type { BestPriorPriceRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "skus": [SKU1241028, SKU7345278],
  "timeframeEndDate": 2020-11-10T23:00:00Z,
  "timeframe": 30,
  "timeframeEndDateType": sale,
  "target": null,
} satisfies BestPriorPriceRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BestPriorPriceRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


