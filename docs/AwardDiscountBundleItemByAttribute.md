
# AwardDiscountBundleItemByAttribute

Identifies a bundle slot by ranking items by a per-item attribute expression and picking the highest- or lowest-ranked one.

## Properties

Name | Type
------------ | -------------
`type` | string
`attribute` | string
`direction` | string

## Example

```typescript
import type { AwardDiscountBundleItemByAttribute } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "attribute": {{$Item.Price}},
  "direction": highest,
} satisfies AwardDiscountBundleItemByAttribute

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AwardDiscountBundleItemByAttribute
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


