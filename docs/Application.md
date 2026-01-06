
# Application


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`modified` | Date
`accountId` | number
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
`defaultEvaluationGroupId` | number
`defaultCartItemFilterId` | number
`enableCampaignStateManagement` | boolean
`loyaltyPrograms` | [Array&lt;LoyaltyProgram&gt;](LoyaltyProgram.md)

## Example

```typescript
import type { Application } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "modified": 2021-09-12T10:12:42Z,
  "accountId": 3886,
  "name": My Application,
  "description": A test Application,
  "timezone": Europe/Berlin,
  "currency": EUR,
  "caseSensitivity": sensitive,
  "attributes": null,
  "limits": null,
  "defaultDiscountScope": sessionTotal,
  "enableCascadingDiscounts": true,
  "enableFlattenedCartItems": true,
  "attributesSettings": null,
  "sandbox": true,
  "enablePartialDiscounts": false,
  "defaultDiscountAdditionalCostPerItemScope": price,
  "defaultEvaluationGroupId": 3,
  "defaultCartItemFilterId": 3,
  "enableCampaignStateManagement": false,
  "loyaltyPrograms": null,
} satisfies Application

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Application
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


