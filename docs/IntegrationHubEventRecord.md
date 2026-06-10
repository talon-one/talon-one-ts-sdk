
# IntegrationHubEventRecord


## Properties

Name | Type
------------ | -------------
`id` | number
`flowId` | number
`integrationName` | string
`instanceName` | string
`eventType` | [IntegrationHubEventType](IntegrationHubEventType.md)
`publishedAt` | Date
`processedAt` | Date
`deliveredAt` | Date
`scheduledTo` | Date
`retry` | number
`payload` | string

## Example

```typescript
import type { IntegrationHubEventRecord } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "flowId": null,
  "integrationName": null,
  "instanceName": null,
  "eventType": null,
  "publishedAt": null,
  "processedAt": null,
  "deliveredAt": null,
  "scheduledTo": null,
  "retry": null,
  "payload": null,
} satisfies IntegrationHubEventRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationHubEventRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


