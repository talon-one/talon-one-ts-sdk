
# LoginParams


## Properties

Name | Type
------------ | -------------
`email` | string
`password` | string

## Example

```typescript
import type { LoginParams } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "email": john.doe@example.com,
  "password": admin123456,
} satisfies LoginParams

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoginParams
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


