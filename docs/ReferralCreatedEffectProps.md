
# ReferralCreatedEffectProps

The properties specific to the \"referralCreated\" effect. This gets triggered whenever a validated rule contained a \"create referral\" effect, and a referral code was created for a customer. See \"createdReferrals\" on the response for all details of this referral code.

## Properties

Name | Type
------------ | -------------
`value` | string

## Example

```typescript
import type { ReferralCreatedEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
} satisfies ReferralCreatedEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferralCreatedEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


