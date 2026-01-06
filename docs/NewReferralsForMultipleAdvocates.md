
# NewReferralsForMultipleAdvocates


## Properties

Name | Type
------------ | -------------
`startDate` | Date
`expiryDate` | Date
`usageLimit` | number
`campaignId` | number
`advocateProfileIntegrationIds` | Array&lt;string&gt;
`attributes` | object
`validCharacters` | Array&lt;string&gt;
`referralPattern` | string

## Example

```typescript
import type { NewReferralsForMultipleAdvocates } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "startDate": 2020-11-10T23:00:00Z,
  "expiryDate": 2021-11-10T23:00:00Z,
  "usageLimit": 1,
  "campaignId": 45,
  "advocateProfileIntegrationIds": [URNGV8294NV, DRPVV9476AF],
  "attributes": {channel=web},
  "validCharacters": [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z],
  "referralPattern": REF-###-###,
} satisfies NewReferralsForMultipleAdvocates

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewReferralsForMultipleAdvocates
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


