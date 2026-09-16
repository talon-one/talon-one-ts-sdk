
# CustomEffectBlockReference


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`title` | string

## Example

```typescript
import type { CustomEffectBlockReference } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "name": sendEmail,
  "title": Send email,
} satisfies CustomEffectBlockReference

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomEffectBlockReference
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


