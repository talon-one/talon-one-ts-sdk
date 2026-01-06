
# OktaEventTarget

Target of the specific Okta event.

## Properties

Name | Type
------------ | -------------
`type` | string
`alternateId` | string
`displayName` | string

## Example

```typescript
import type { OktaEventTarget } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": AppUser,
  "alternateId": john.doe@example.com,
  "displayName": John Doe,
} satisfies OktaEventTarget

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OktaEventTarget
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


