
# CartItem


## Properties

Name | Type
------------ | -------------
`name` | string
`sku` | string
`quantity` | number
`returnedQuantity` | number
`remainingQuantity` | number
`price` | number
`category` | string
`product` | [Product](Product.md)
`weight` | number
`height` | number
`width` | number
`length` | number
`position` | number
`attributes` | object
`additionalCosts` | [{ [key: string]: AdditionalCost; }](AdditionalCost.md)
`catalogItemID` | number
`selectedPriceType` | string
`adjustmentReferenceId` | string
`adjustmentEffectiveFrom` | Date
`adjustmentEffectiveUntil` | Date
`prices` | [{ [key: string]: PriceDetail; }](PriceDetail.md)

## Example

```typescript
import type { CartItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Air Glide,
  "sku": SKU1241028,
  "quantity": 1,
  "returnedQuantity": 1,
  "remainingQuantity": 1,
  "price": 99.99,
  "category": shoes,
  "product": null,
  "weight": 1130,
  "height": null,
  "width": null,
  "length": null,
  "position": null,
  "attributes": {image=11.jpeg, material=leather},
  "additionalCosts": {shipping={price=9}},
  "catalogItemID": null,
  "selectedPriceType": member,
  "adjustmentReferenceId": 68851723-e6fa-488f-ace9-112581e6c19b,
  "adjustmentEffectiveFrom": 2021-09-12T10:12:42Z,
  "adjustmentEffectiveUntil": 2021-09-12T10:12:42Z,
  "prices": {member={price=90, adjustmentReferenceId=68851723-e6fa-488f-ace9-112581e6c19b, effectiveFrom=2025-05-25T00:00:00Z, effectiveUntil=2025-05-30T00:00:00Z}, base={price=100}},
} satisfies CartItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CartItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


