
# IdentifiableEntity


## Properties

Name | Type
------------ | -------------
`id` | number

## Example

```typescript
import type { IdentifiableEntity } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
} satisfies IdentifiableEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IdentifiableEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


