
# UpdateStore


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`attributes` | object

## Example

```typescript
import type { UpdateStore } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": South US store,
  "description": This is the description of the store in south US.,
  "attributes": {country=USA, code=1234},
} satisfies UpdateStore

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateStore
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


