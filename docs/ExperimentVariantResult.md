
# ExperimentVariantResult


## Properties

Name | Type
------------ | -------------
`variantId` | number
`variantName` | string
`variantWeight` | number
`totalRevenue` | number
`sessionsCount` | number
`avgItemsPerSession` | number
`avgSessionValue` | number
`avgDiscountedSessionValue` | number
`totalDiscounts` | number
`couponsCount` | number

## Example

```typescript
import type { ExperimentVariantResult } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "variantId": 1,
  "variantName": Variant A,
  "variantWeight": 50,
  "totalRevenue": 100,
  "sessionsCount": 100,
  "avgItemsPerSession": 100,
  "avgSessionValue": 100,
  "avgDiscountedSessionValue": 100,
  "totalDiscounts": 10,
  "couponsCount": 12,
} satisfies ExperimentVariantResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExperimentVariantResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


