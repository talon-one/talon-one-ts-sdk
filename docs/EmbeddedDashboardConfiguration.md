
# EmbeddedDashboardConfiguration


## Properties

Name | Type
------------ | -------------
`workspaceId` | string
`dashboardId` | string

## Example

```typescript
import type { EmbeddedDashboardConfiguration } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "workspaceId": main_workspace,
  "dashboardId": campaign_insights_metrics,
} satisfies EmbeddedDashboardConfiguration

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedDashboardConfiguration
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


