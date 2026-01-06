
# RoleAssign


## Properties

Name | Type
------------ | -------------
`users` | Array&lt;number&gt;
`roles` | Array&lt;number&gt;

## Example

```typescript
import type { RoleAssign } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "users": [48, 562, 475, 18],
  "roles": [128, 147],
} satisfies RoleAssign

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RoleAssign
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


