
# ApplicationSession


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`integrationId` | string
`storeIntegrationId` | string
`applicationId` | number
`profileId` | number
`profileintegrationid` | string
`coupon` | string
`referral` | string
`state` | string
`cartItems` | [Array&lt;CartItem&gt;](CartItem.md)
`discounts` | { [key: string]: number; }
`totalDiscounts` | number
`total` | number
`attributes` | object

## Example

```typescript
import type { ApplicationSession } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-02-07T08:15:22Z,
  "integrationId": URNGV8294NV,
  "storeIntegrationId": STORE-001,
  "applicationId": 322,
  "profileId": 138,
  "profileintegrationid": 382370BKDB946,
  "coupon": BKDB946,
  "referral": BKDB946,
  "state": closed,
  "cartItems": null,
  "discounts": null,
  "totalDiscounts": 100,
  "total": 200,
  "attributes": null,
} satisfies ApplicationSession

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApplicationSession
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


