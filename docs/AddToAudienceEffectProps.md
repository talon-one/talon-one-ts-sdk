
# AddToAudienceEffectProps

The properties specific to the \"addToAudience\" effect. This gets triggered whenever a validated rule contains an \"addToAudience\" effect.

## Properties

Name | Type
------------ | -------------
`audienceId` | number
`audienceName` | string
`profileIntegrationId` | string
`profileId` | number

## Example

```typescript
import type { AddToAudienceEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "audienceId": 10,
  "audienceName": My audience,
  "profileIntegrationId": URNGV8294NV,
  "profileId": 150,
} satisfies AddToAudienceEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AddToAudienceEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


