
# Return


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`applicationId` | number
`accountId` | number
`returnedCartItems` | [Array&lt;ReturnedCartItem&gt;](ReturnedCartItem.md)
`eventId` | number
`sessionId` | number
`sessionIntegrationId` | string
`profileId` | number
`profileIntegrationId` | string
`createdBy` | number

## Example

```typescript
import type { Return } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "applicationId": 322,
  "accountId": 3886,
  "returnedCartItems": null,
  "eventId": 123,
  "sessionId": 123,
  "sessionIntegrationId": 0c0e0207-eb30-4e06-a56c-2b7c8a64953c,
  "profileId": 123,
  "profileIntegrationId": 0c0e0207-eb30-4e06-a56c-2b7c8a64953c,
  "createdBy": 123,
} satisfies Return

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Return
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


