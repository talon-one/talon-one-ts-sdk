
# IntegrationHubFlow


## Properties

Name | Type
------------ | -------------
`applicationID` | number
`loyaltyProgramID` | number
`eventType` | [IntegrationHubEventType](IntegrationHubEventType.md)
`integrationHubFlowUrl` | string

## Example

```typescript
import type { IntegrationHubFlow } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationID": 54,
  "loyaltyProgramID": 12,
  "eventType": null,
  "integrationHubFlowUrl": null,
} satisfies IntegrationHubFlow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationHubFlow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


