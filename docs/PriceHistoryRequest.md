
# PriceHistoryRequest


## Properties

Name | Type
------------ | -------------
`sku` | string
`startDate` | Date
`endDate` | Date

## Example

```typescript
import type { PriceHistoryRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "sku": [sku-124],
  "startDate": 2020-11-10T23:00:00Z,
  "endDate": 2020-12-10T23:00:00Z,
} satisfies PriceHistoryRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceHistoryRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


