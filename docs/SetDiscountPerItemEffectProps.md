
# SetDiscountPerItemEffectProps

The properties specific to the `setDiscountPerItem` effect, triggered whenever a validated rule contained a \"set per item discount\" effect. This is a discount that will be applied either on a specific item, on a specific item + additional cost or on all additional costs per item. This depends on the chosen scope. 

## Properties

Name | Type
------------ | -------------
`name` | string
`value` | number
`position` | number
`subPosition` | number
`desiredValue` | number
`scope` | string
`totalDiscount` | number
`desiredTotalDiscount` | number
`bundleIndex` | number
`bundleName` | string
`targetedItemPosition` | number
`targetedItemSubPosition` | number

## Example

```typescript
import type { SetDiscountPerItemEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "value": null,
  "position": null,
  "subPosition": null,
  "desiredValue": null,
  "scope": null,
  "totalDiscount": null,
  "desiredTotalDiscount": null,
  "bundleIndex": null,
  "bundleName": null,
  "targetedItemPosition": null,
  "targetedItemSubPosition": null,
} satisfies SetDiscountPerItemEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetDiscountPerItemEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


