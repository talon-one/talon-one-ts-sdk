
# UpdateAudience


## Properties

Name | Type
------------ | -------------
`name` | string
`subscribedApplicationsIds` | Set&lt;number&gt;

## Example

```typescript
import type { UpdateAudience } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Travel audience,
  "subscribedApplicationsIds": [3, 13],
} satisfies UpdateAudience

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAudience
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


