
# ApplicationCampaignStats

Provides statistics regarding an application\'s campaigns.

## Properties

Name | Type
------------ | -------------
`disabled` | number
`staged` | number
`scheduled` | number
`running` | number
`expired` | number
`archived` | number

## Example

```typescript
import type { ApplicationCampaignStats } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "disabled": null,
  "staged": null,
  "scheduled": null,
  "running": null,
  "expired": null,
  "archived": null,
} satisfies ApplicationCampaignStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApplicationCampaignStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


