
# StrikethroughChangedItem

The information of affected items.

## Properties

Name | Type
------------ | -------------
`id` | number
`catalogId` | number
`sku` | string
`version` | number
`price` | number
`prices` | [{ [key: string]: PriceDetail; }](PriceDetail.md)
`evaluatedAt` | Date
`effects` | [Array&lt;StrikethroughEffect&gt;](StrikethroughEffect.md)

## Example

```typescript
import type { StrikethroughChangedItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "catalogId": 10,
  "sku": SKU1241028,
  "version": 6,
  "price": 100,
  "prices": {member={price=90, adjustmentReferenceId=68851723-e6fa-488f-ace9-112581e6c19b, adjustmentEffectiveFrom=2025-05-25T00:00:00Z, adjustmentEffectiveUntil=2025-05-30T00:00:00Z}, base={price=100}},
  "evaluatedAt": 2020-06-10T09:05:27.993483Z,
  "effects": null,
} satisfies StrikethroughChangedItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrikethroughChangedItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


