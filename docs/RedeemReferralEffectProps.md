
# RedeemReferralEffectProps

This effect is **deprecated**. The properties specific to the \"redeemReferral\" effect. This gets triggered whenever the referral code is valid, and a rule was triggered that contains a \"redeem referral\" effect. 

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


