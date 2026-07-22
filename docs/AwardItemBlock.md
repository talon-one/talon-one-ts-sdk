
# AwardItemBlock


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`sku` | string
`name` | string
`quantity` | string
`partial` | boolean
`onFailure` | [Array&lt;PromotionBlock&gt;](PromotionBlock.md)
`onError` | { [key: string]: Array&lt;PromotionBlock&gt;; }

## Example

```typescript
import type { AwardItemBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "sku": SKU1241028,
  "name": Free Tote Bag,
  "quantity": 1,
  "partial": false,
  "onFailure": null,
  "onError": null,
} satisfies AwardItemBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AwardItemBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


