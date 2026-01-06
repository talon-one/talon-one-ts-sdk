
# UpdateCatalog


## Properties

Name | Type
------------ | -------------
`description` | string
`name` | string
`subscribedApplicationsIds` | Array&lt;number&gt;

## Example

```typescript
import type { UpdateCatalog } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "description": seafood catalog,
  "name": seafood,
  "subscribedApplicationsIds": [1, 2, 3],
} satisfies UpdateCatalog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCatalog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


