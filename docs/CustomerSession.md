
# CustomerSession


## Properties

Name | Type
------------ | -------------
`integrationId` | string
`created` | Date
`applicationId` | number
`profileId` | string
`coupon` | string
`referral` | string
`state` | string
`cartItems` | [Array&lt;CartItem&gt;](CartItem.md)
`identifiers` | Array&lt;string&gt;
`total` | number
`attributes` | object
`firstSession` | boolean
`updateCount` | number
`discounts` | { [key: string]: number; }
`updated` | Date

## Example

```typescript
import type { CustomerSession } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "integrationId": null,
  "created": 2020-02-07T08:15:22Z,
  "applicationId": 322,
  "profileId": URNGV8294NV,
  "coupon": XMAS-2021,
  "referral": 2740-tbjua-6720,
  "state": open,
  "cartItems": null,
  "identifiers": [91.11.156.141],
  "total": null,
  "attributes": null,
  "firstSession": true,
  "updateCount": 3,
  "discounts": null,
  "updated": 2021-09-12T10:12:42Z,
} satisfies CustomerSession

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerSession
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


