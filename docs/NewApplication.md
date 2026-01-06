
# NewApplication


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`timezone` | string
`currency` | string
`caseSensitivity` | string
`attributes` | object
`limits` | [Array&lt;LimitConfig&gt;](LimitConfig.md)
`defaultDiscountScope` | string
`enableCascadingDiscounts` | boolean
`enableFlattenedCartItems` | boolean
`attributesSettings` | [AttributesSettings](AttributesSettings.md)
`sandbox` | boolean
`enablePartialDiscounts` | boolean
`defaultDiscountAdditionalCostPerItemScope` | string
`key` | string
`enableCampaignStateManagement` | boolean

## Example

```typescript
import type { NewApplication } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": My Application,
  "description": A test Application,
  "timezone": Europe/Berlin,
  "currency": EUR,
  "caseSensitivity": sensitive,
  "attributes": null,
  "limits": null,
  "defaultDiscountScope": null,
  "enableCascadingDiscounts": null,
  "enableFlattenedCartItems": null,
  "attributesSettings": null,
  "sandbox": null,
  "enablePartialDiscounts": false,
  "defaultDiscountAdditionalCostPerItemScope": null,
  "key": null,
  "enableCampaignStateManagement": false,
} satisfies NewApplication

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewApplication
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


