
# NewCustomerSessionV2

The representation of the customer session.

## Properties

Name | Type
------------ | -------------
`profileId` | string
`storeIntegrationId` | string
`evaluableCampaignIds` | Array&lt;number&gt;
`couponCodes` | Array&lt;string&gt;
`referralCode` | string
`loyaltyCards` | Array&lt;string&gt;
`state` | string
`cartItems` | [Array&lt;CartItem&gt;](CartItem.md)
`experimentVariantAllocations` | [Array&lt;ExperimentVariantAllocation&gt;](ExperimentVariantAllocation.md)
`additionalCosts` | [{ [key: string]: AdditionalCost; }](AdditionalCost.md)
`identifiers` | Array&lt;string&gt;
`attributes` | object

## Example

```typescript
import type { NewCustomerSessionV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "profileId": URNGV8294NV,
  "storeIntegrationId": STORE-001,
  "evaluableCampaignIds": [10, 12],
  "couponCodes": [XMAS-20-2021],
  "referralCode": NT2K54D9,
  "loyaltyCards": [loyalty-card-1],
  "state": open,
  "cartItems": null,
  "experimentVariantAllocations": null,
  "additionalCosts": {shipping={price=9}},
  "identifiers": [d41306257915f83fe01e54092ae470f631161ea16fcf4415842eed41470386ea],
  "attributes": {ShippingCity=Berlin},
} satisfies NewCustomerSessionV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCustomerSessionV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


