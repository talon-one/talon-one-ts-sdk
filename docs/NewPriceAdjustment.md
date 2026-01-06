
# NewPriceAdjustment


## Properties

Name | Type
------------ | -------------
`priceType` | string
`price` | number
`referenceId` | string
`calculatedAt` | Date
`effectiveFrom` | Date
`effectiveUntil` | Date
`contextId` | string

## Example

```typescript
import type { NewPriceAdjustment } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "priceType": member,
  "price": 100,
  "referenceId": 68851723-e6fa-488f-ace9-112581e6c19b,
  "calculatedAt": 2021-09-12T10:12:42Z,
  "effectiveFrom": 2021-09-12T10:12:42Z,
  "effectiveUntil": 2021-09-12T10:12:42Z,
  "contextId": Summer2025,
} satisfies NewPriceAdjustment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewPriceAdjustment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


