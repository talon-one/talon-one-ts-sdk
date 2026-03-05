
# IntegrationHubFlowConfigResponse


## Properties

Name | Type
------------ | -------------
`workerCount` | number
`maxEventsPerMessage` | number
`maxRetries` | number

## Example

```typescript
import type { IntegrationHubFlowConfigResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "workerCount": null,
  "maxEventsPerMessage": null,
  "maxRetries": null,
} satisfies IntegrationHubFlowConfigResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationHubFlowConfigResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


