
# RemoveFromAudienceEffectProps

This effect is triggered when a rule containing an [Update audience](https://docs.talon.one/docs/product/rules/effects/use-effects#update-an-audience) effect with **Remove customer from an audience** selected is validated. It indicates that a customer was removed from an audience and is returned when a customer session is opened, updated, or closed.

## Properties

Name | Type
------------ | -------------
`audienceId` | number
`audienceName` | string
`profileIntegrationId` | string
`profileId` | number

## Example

```typescript
import type { RemoveFromAudienceEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "audienceId": 10,
  "audienceName": My audience,
  "profileIntegrationId": URNGV8294NV,
  "profileId": 150,
} satisfies RemoveFromAudienceEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RemoveFromAudienceEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


