
# CouponDeletionFilters


## Properties

Name | Type
------------ | -------------
`createdBefore` | Date
`createdAfter` | Date
`startsAfter` | Date
`startsBefore` | Date
`valid` | string
`usable` | boolean
`redeemed` | boolean
`recipientIntegrationId` | string
`exactMatch` | boolean
`value` | string
`batchId` | string
`referralId` | number
`expiresAfter` | Date
`expiresBefore` | Date

## Example

```typescript
import type { CouponDeletionFilters } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "createdBefore": null,
  "createdAfter": null,
  "startsAfter": null,
  "startsBefore": null,
  "valid": null,
  "usable": null,
  "redeemed": null,
  "recipientIntegrationId": null,
  "exactMatch": null,
  "value": null,
  "batchId": null,
  "referralId": null,
  "expiresAfter": null,
  "expiresBefore": null,
} satisfies CouponDeletionFilters

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponDeletionFilters
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


