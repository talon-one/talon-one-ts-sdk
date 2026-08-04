
# AwardDiscountBundleTarget

Applies the discount to items belonging to a named bundle.

## Properties

Name | Type
------------ | -------------
`type` | string
`name` | string
`item` | [AwardDiscountBundleItem](AwardDiscountBundleItem.md)
`prorated` | boolean

## Example

```typescript
import type { AwardDiscountBundleTarget } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "name": BogoBundle,
  "item": null,
  "prorated": false,
} satisfies AwardDiscountBundleTarget

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AwardDiscountBundleTarget
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


