
# AddLoyaltyPointsEffectProps

The properties specific to the \"addLoyaltyPoints\" effect. This gets triggered whenever a validated rule contained an \"add loyalty\" effect. These points are automatically stored and managed inside Talon.One. 

## Properties

Name | Type
------------ | -------------
`name` | string
`programId` | number
`subLedgerId` | string
`value` | number
`desiredValue` | number
`recipientIntegrationId` | string
`startDate` | Date
`expiryDate` | Date
`transactionUUID` | string
`cartItemPosition` | number
`cartItemSubPosition` | number
`cardIdentifier` | string
`bundleIndex` | number
`bundleName` | string
`awaitsActivation` | boolean
`validityDuration` | string

## Example

```typescript
import type { AddLoyaltyPointsEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "programId": null,
  "subLedgerId": null,
  "value": null,
  "desiredValue": null,
  "recipientIntegrationId": URNGV8294NV,
  "startDate": null,
  "expiryDate": null,
  "transactionUUID": null,
  "cartItemPosition": null,
  "cartItemSubPosition": null,
  "cardIdentifier": summer-loyalty-card-0543,
  "bundleIndex": null,
  "bundleName": null,
  "awaitsActivation": null,
  "validityDuration": null,
} satisfies AddLoyaltyPointsEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddLoyaltyPointsEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


