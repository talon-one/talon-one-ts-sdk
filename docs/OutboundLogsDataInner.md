
# OutboundLogsDataInner


## Properties

Name | Type
------------ | -------------
`uuid` | string
`notificationId` | number
`notificationName` | string
`webhookId` | number
`webhookName` | string
`notificationType` | string
`applicationId` | number
`loyaltyProgramId` | number
`request` | [OutboundLogRequest](OutboundLogRequest.md)
`createdAt` | Date
`processingTimeMs` | number
`response` | [OutboundLogResponse](OutboundLogResponse.md)
`error` | string
`id` | string

## Example

```typescript
import type { OutboundLogsDataInner } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "uuid": 67e55044-10b1-426f-9247-bb680e5fe0c8,
  "notificationId": 1,
  "notificationName": Notification name,
  "webhookId": 101,
  "webhookName": My webhook,
  "notificationType": CampaignNotification,
  "applicationId": 1,
  "loyaltyProgramId": 2,
  "request": null,
  "createdAt": 2026-08-17T14:32:05Z,
  "processingTimeMs": 180,
  "response": null,
  "error": internal server error,
  "id": 67e55044-10b1-426f-9247-bb680e5fe0c8,
} satisfies OutboundLogsDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutboundLogsDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


