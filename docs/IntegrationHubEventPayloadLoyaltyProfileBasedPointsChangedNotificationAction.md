
# IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction


## Properties

Name | Type
------------ | -------------
`amount` | number
`reason` | string
`operation` | string
`startDate` | Date
`expiryDate` | Date
`transactionUUID` | string
`created` | Date
`awaitsActivation` | boolean
`validityDuration` | string

## Example

```typescript
import type { IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "reason": null,
  "operation": null,
  "startDate": null,
  "expiryDate": null,
  "transactionUUID": null,
  "created": 2023-01-24T14:15:22Z,
  "awaitsActivation": false,
  "validityDuration": 30D,
} satisfies IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationHubEventPayloadLoyaltyProfileBasedPointsChangedNotificationAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


