
# RollbackReferralEffectProps

The properties specific to the \"rollbackReferral\" effect. This gets triggered whenever previously closed session is now cancelled and a referral redemption was cancelled on our internal usage limit counters.

## Properties

Name | Type
------------ | -------------
`value` | string

## Example

```typescript
import type { RollbackReferralEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "value": null,
} satisfies RollbackReferralEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RollbackReferralEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


