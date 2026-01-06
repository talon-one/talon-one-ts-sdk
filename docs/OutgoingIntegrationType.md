
# OutgoingIntegrationType


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`description` | string
`category` | string
`documentationLink` | string

## Example

```typescript
import type { OutgoingIntegrationType } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "name": Braze,
  "description": Braze is a customer data platform,
  "category": customer engagement platform,
  "documentationLink": https://docs.talon.one/docs/dev/technology-partners/braze,
} satisfies OutgoingIntegrationType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutgoingIntegrationType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


