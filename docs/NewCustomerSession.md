
# NewCustomerSession


## Properties

Name | Type
------------ | -------------
`profileId` | string
`coupon` | string
`referral` | string
`state` | string
`cartItems` | [Array&lt;CartItem&gt;](CartItem.md)
`identifiers` | Array&lt;string&gt;
`total` | number
`attributes` | object

## Example

```typescript
import type { NewCustomerSession } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "profileId": URNGV8294NV,
  "coupon": XMAS-2021,
  "referral": 2740-tbjua-6720,
  "state": open,
  "cartItems": null,
  "identifiers": [91.11.156.141],
  "total": null,
  "attributes": null,
} satisfies NewCustomerSession

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCustomerSession
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


