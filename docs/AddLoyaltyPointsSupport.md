
# AddLoyaltyPointsSupport

Points to add via the support portal.

## Properties

Name | Type
------------ | -------------
`points` | number
`name` | string
`validityDuration` | string
`validUntil` | Date
`pendingDuration` | string
`pendingUntil` | Date
`subledgerId` | string
`applicationId` | number
`supportRequestId` | number
`processingNote` | string

## Example

```typescript
import type { AddLoyaltyPointsSupport } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "points": 300,
  "name": Compensation,
  "validityDuration": 5D,
  "validUntil": 2021-07-20T22:00:00Z,
  "pendingDuration": 12h,
  "pendingUntil": 2021-07-20T22:00:00Z,
  "subledgerId": sub-123,
  "applicationId": 322,
  "supportRequestId": 42,
  "processingNote": Approved after manual review.,
} satisfies AddLoyaltyPointsSupport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddLoyaltyPointsSupport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


