
# AccessLogEntry

Log of application accesses.

## Properties

Name | Type
------------ | -------------
`uuid` | string
`status` | number
`method` | string
`requestUri` | string
`time` | Date
`requestPayload` | string
`responsePayload` | string

## Example

```typescript
import type { AccessLogEntry } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "uuid": 606e7d34-2d36-4d53-ac71-d4442c325985,
  "status": 200,
  "method": PUT,
  "requestUri": /v2/customer_sessions/Session136667,
  "time": 2023-01-16T16:00:00.700763Z,
  "requestPayload": {
    "customerSession": {
        "profileId": "customer123",
        "state": "closed",
...
},
  "responsePayload": {"coupons":[],"createdCoupons":[],...},
} satisfies AccessLogEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccessLogEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


