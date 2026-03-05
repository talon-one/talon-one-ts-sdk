
# IntegrationHubEventPayloadLoyaltyProfileBasedTierUpgradeNotification


## Properties

Name | Type
------------ | -------------
`profileIntegrationID` | string
`loyaltyProgramID` | number
`subledgerID` | string
`sourceOfEvent` | string
`currentTier` | string
`currentPoints` | number
`oldTier` | string
`pointsRequiredToTheNextTier` | number
`nextTier` | string
`tierExpirationDate` | Date
`timestampOfTierChange` | Date
`publishedAt` | Date

## Example

```typescript
import type { IntegrationHubEventPayloadLoyaltyProfileBasedTierUpgradeNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "profileIntegrationID": null,
  "loyaltyProgramID": null,
  "subledgerID": null,
  "sourceOfEvent": null,
  "currentTier": null,
  "currentPoints": null,
  "oldTier": null,
  "pointsRequiredToTheNextTier": null,
  "nextTier": null,
  "tierExpirationDate": null,
  "timestampOfTierChange": null,
  "publishedAt": null,
} satisfies IntegrationHubEventPayloadLoyaltyProfileBasedTierUpgradeNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationHubEventPayloadLoyaltyProfileBasedTierUpgradeNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


