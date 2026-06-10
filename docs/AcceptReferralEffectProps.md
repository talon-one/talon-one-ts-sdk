
# AcceptReferralEffectProps

This effect indicates that the referral code supplied is valid.  You should handle this effect by informing the user that the referral code is valid.  The code is automatically redeemed when you close the session.  Other effects will provide more information about the actual reward.

## Properties

Name | Type
------------ | -------------
`value` | string

## Example

```typescript
import type { AcceptReferralEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
} satisfies AcceptReferralEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AcceptReferralEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


