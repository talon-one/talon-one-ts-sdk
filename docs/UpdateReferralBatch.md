
# UpdateReferralBatch


## Properties

Name | Type
------------ | -------------
`attributes` | object
`batchID` | string
`startDate` | Date
`expiryDate` | Date
`usageLimit` | number

## Example

```typescript
import type { UpdateReferralBatch } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "attributes": null,
  "batchID": 32535-43255,
  "startDate": 2020-11-10T23:00:00Z,
  "expiryDate": 2021-11-10T23:00:00Z,
  "usageLimit": 1,
} satisfies UpdateReferralBatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateReferralBatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


