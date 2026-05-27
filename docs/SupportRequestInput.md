
# SupportRequestInput


## Properties

Name | Type
------------ | -------------
`applicationId` | number
`campaignId` | number
`loyaltyProgramId` | number
`subledgerId` | number
`customerProfileId` | string
`requestType` | string
`requestValue` | number
`requestNote` | string

## Example

```typescript
import type { SupportRequestInput } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationId": 322,
  "campaignId": 100,
  "loyaltyProgramId": 8,
  "subledgerId": 123,
  "customerProfileId": URNGV8294NV,
  "requestType": personal_coupon,
  "requestValue": 20.5,
  "requestNote": Support request for coupon failure.,
} satisfies SupportRequestInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SupportRequestInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


