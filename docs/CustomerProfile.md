
# CustomerProfile


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`integrationId` | string
`attributes` | object
`accountId` | number
`closedSessions` | number
`totalSales` | number
`loyaltyMemberships` | [Array&lt;LoyaltyMembership&gt;](LoyaltyMembership.md)
`audienceMemberships` | [Array&lt;AudienceMembership&gt;](AudienceMembership.md)
`lastActivity` | Date
`sandbox` | boolean

## Example

```typescript
import type { CustomerProfile } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-02-07T08:15:22Z,
  "integrationId": URNGV8294NV,
  "attributes": {Language=english, ShippingCountry=DE},
  "accountId": 31,
  "closedSessions": 3,
  "totalSales": 299.99,
  "loyaltyMemberships": null,
  "audienceMemberships": null,
  "lastActivity": 2020-02-08T14:15:20Z,
  "sandbox": false,
} satisfies CustomerProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


