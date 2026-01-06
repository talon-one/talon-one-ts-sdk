
# IntegrationEntity


## Properties

Name | Type
------------ | -------------
`integrationId` | string
`created` | Date

## Example

```typescript
import type { IntegrationEntity } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "integrationId": URNGV8294NV,
  "created": 2020-02-07T08:15:22Z,
} satisfies IntegrationEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


