
# LabelTargetAudience

Represents the targeted audience. 

## Properties

Name | Type
------------ | -------------
`type` | string
`audience` | [AudienceReference](AudienceReference.md)

## Example

```typescript
import type { LabelTargetAudience } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "audience": null,
} satisfies LabelTargetAudience

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LabelTargetAudience
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


