
# AwardDiscountBundleItem

Selects which slot inside a bundle a discount applies to. The `type` field picks the selection mode.

## Properties

Name | Type
------------ | -------------
`type` | string
`value` | number
`attribute` | string
`direction` | string

## Example

```typescript
import type { AwardDiscountBundleItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "value": 0,
  "attribute": {{$Item.Price}},
  "direction": highest,
} satisfies AwardDiscountBundleItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AwardDiscountBundleItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


