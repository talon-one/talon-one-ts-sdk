
# ScimBaseUserName

The components of the user’s real name.

## Properties

Name | Type
------------ | -------------
`formatted` | string

## Example

```typescript
import type { ScimBaseUserName } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "formatted": Mr. John J Doe,
} satisfies ScimBaseUserName

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScimBaseUserName
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


