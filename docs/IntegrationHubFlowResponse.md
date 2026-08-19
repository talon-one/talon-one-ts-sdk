
# IntegrationHubFlowResponse


## Properties

Name | Type
------------ | -------------
`id` | number
`integrationName` | string
`instanceName` | string
`createdAt` | Date
`disabledUntil` | Date
`applicationId` | number
`loyaltyProgramId` | number
`eventType` | string
`config` | [IntegrationHubFlowConfigResponse](IntegrationHubFlowConfigResponse.md)

## Example

```typescript
import type { IntegrationHubFlowResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "integrationName": null,
  "instanceName": null,
  "createdAt": null,
  "disabledUntil": null,
  "applicationId": 54,
  "loyaltyProgramId": 12,
  "eventType": null,
  "config": null,
} satisfies IntegrationHubFlowResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationHubFlowResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


