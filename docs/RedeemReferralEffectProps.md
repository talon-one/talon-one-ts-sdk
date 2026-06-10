
# RedeemReferralEffectProps

This effect is **deprecated**. It has been replaced by the `acceptReferral` effect. This effect indicates that the referral code is valid and has been redeemed. 

## Properties

Name | Type
------------ | -------------
`id` | number
`value` | string

## Example

```typescript
import type { RedeemReferralEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "value": null,
} satisfies RedeemReferralEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RedeemReferralEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


