
# NewCouponsForMultipleRecipients


## Properties

Name | Type
------------ | -------------
`usageLimit` | number
`discountLimit` | number
`reservationLimit` | number
`startDate` | Date
`expiryDate` | Date
`attributes` | object
`recipientsIntegrationIds` | Array&lt;string&gt;
`validCharacters` | Array&lt;string&gt;
`couponPattern` | string

## Example

```typescript
import type { NewCouponsForMultipleRecipients } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "usageLimit": 100,
  "discountLimit": 30,
  "reservationLimit": 45,
  "startDate": 2020-01-24T14:15:22Z,
  "expiryDate": 2023-08-24T14:15:22Z,
  "attributes": {venueId=12},
  "recipientsIntegrationIds": [URNGV8294NV, BZGGC2454PA],
  "validCharacters": [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z],
  "couponPattern": SUMMER-#####,
} satisfies NewCouponsForMultipleRecipients

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCouponsForMultipleRecipients
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


