
# ReferralConstraints


## Properties

Name | Type
------------ | -------------
`startDate` | Date
`expiryDate` | Date
`usageLimit` | number

## Example

```typescript
import type { ReferralConstraints } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "startDate": 2020-11-10T23:00:00Z,
  "expiryDate": 2021-11-10T23:00:00Z,
  "usageLimit": 1,
} satisfies ReferralConstraints

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferralConstraints
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


