
# NewCatalog


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`subscribedApplicationsIds` | Array&lt;number&gt;

## Example

```typescript
import type { NewCatalog } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": seafood,
  "description": seafood catalog,
  "subscribedApplicationsIds": [1, 2, 3],
} satisfies NewCatalog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCatalog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


