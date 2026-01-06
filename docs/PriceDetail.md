
# PriceDetail


## Properties

Name | Type
------------ | -------------
`price` | number
`adjustmentContextId` | string
`adjustmentReferenceId` | string
`adjustmentEffectiveFrom` | Date
`adjustmentEffectiveUntil` | Date

## Example

```typescript
import type { PriceDetail } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "price": 90,
  "adjustmentContextId": summer25,
  "adjustmentReferenceId": 68851723-e6fa-488f-ace9-112581e6c19b,
  "adjustmentEffectiveFrom": 2025-05-25T00:00:00Z,
  "adjustmentEffectiveUntil": 2025-05-30T00:00:00Z,
} satisfies PriceDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


