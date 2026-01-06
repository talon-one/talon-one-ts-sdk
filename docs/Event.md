
# Event


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`applicationId` | number
`profileId` | string
`storeIntegrationId` | string
`type` | string
`attributes` | object
`sessionId` | string
`effects` | Array&lt;object&gt;
`ledgerEntries` | [Array&lt;LedgerEntry&gt;](LedgerEntry.md)
`meta` | [Meta](Meta.md)

## Example

```typescript
import type { Event } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "applicationId": 322,
  "profileId": URNGV8294NV,
  "storeIntegrationId": STORE-001,
  "type": pageViewed,
  "attributes": {myAttribute=myValue},
  "sessionId": 175KJPS947296,
  "effects": null,
  "ledgerEntries": null,
  "meta": null,
} satisfies Event

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Event
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


