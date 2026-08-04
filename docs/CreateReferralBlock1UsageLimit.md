
# CreateReferralBlock1UsageLimit

The number of times the referral code code can be redeemed. `0` means unlimited redemptions, but any campaign usage limits still apply. Either a numeric scalar or a `{{expression}}` string that resolves to a number at evaluation time. 

## Properties

Name | Type
------------ | -------------

## Example

```typescript
import type { CreateReferralBlock1UsageLimit } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
} satisfies CreateReferralBlock1UsageLimit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateReferralBlock1UsageLimit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


