
# MessageLogEntry

Message Log.

## Properties

Name | Type
------------ | -------------
`id` | string
`service` | string
`changeType` | string
`notificationId` | number
`notificationName` | string
`webhookId` | number
`webhookName` | string
`request` | [MessageLogRequest](MessageLogRequest.md)
`response` | [MessageLogResponse](MessageLogResponse.md)
`createdAt` | Date
`entityType` | string
`url` | string
`applicationId` | number
`loyaltyProgramId` | number
`campaignId` | number

## Example

```typescript
import type { MessageLogEntry } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 123e4567-e89b-12d3-a456-426614174000,
  "service": NotificationService,
  "changeType": Update,
  "notificationId": 101,
  "notificationName": My campaign notification,
  "webhookId": 101,
  "webhookName": My webhook,
  "request": null,
  "response": null,
  "createdAt": 2021-07-20T22:00:00Z,
  "entityType": loyalty_program,
  "url": www.my-company.com/my-endpoint-name,
  "applicationId": 5,
  "loyaltyProgramId": 2,
  "campaignId": 2,
} satisfies MessageLogEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessageLogEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


