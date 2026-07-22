
# SupportRequest

Summary of a support request created by a customer support agent.

## Properties

Name | Type
------------ | -------------
`id` | number
`applicationId` | number
`campaignId` | number
`loyaltyProgramId` | number
`subledgerId` | number
`createdByUser` | string
`createdAt` | Date
`customerProfileId` | string
`requestType` | string
`requestValue` | number
`requestNote` | string
`requestStatus` | string
`processedAt` | Date
`processingNote` | string
`processedByUser` | string
`couponCode` | string

## Example

```typescript
import type { SupportRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "applicationId": 322,
  "campaignId": 100,
  "loyaltyProgramId": 8,
  "subledgerId": 123,
  "createdByUser": support.agent.name@company.com,
  "createdAt": 2025-07-20T22:00:00Z,
  "customerProfileId": URNGV8294NV,
  "requestType": personal_coupon,
  "requestValue": 20.5,
  "requestNote": Support request for coupon failure.,
  "requestStatus": approved,
  "processedAt": 2025-07-20T22:10:00Z,
  "processingNote": Rejected as the customer was awarded points already.,
  "processedByUser": admin.name@company.com,
  "couponCode": SUMMER-2025-XYZ,
} satisfies SupportRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SupportRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


