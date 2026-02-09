
# CustomerSessionV2


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`integrationId` | string
`applicationId` | number
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
`firstSession` | boolean
`updateCount` | number
`total` | number
`cartItemTotal` | number
`additionalCostTotal` | number
`updated` | Date

## Example

```typescript
import type { CustomerSessionV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-02-07T08:15:22Z,
  "integrationId": URNGV8294NV,
  "applicationId": 322,
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
  "firstSession": true,
  "updateCount": 3,
  "total": 119.99,
  "cartItemTotal": 99.99,
  "additionalCostTotal": 20,
  "updated": 2020-02-08T14:15:22Z,
} satisfies CustomerSessionV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerSessionV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


