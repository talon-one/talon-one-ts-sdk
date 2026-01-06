
# NewCollection


## Properties

Name | Type
------------ | -------------
`description` | string
`subscribedApplicationsIds` | Array&lt;number&gt;
`name` | string

## Example

```typescript
import type { NewCollection } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "description": My collection of SKUs,
  "subscribedApplicationsIds": [1, 2, 3],
  "name": My collection,
} satisfies NewCollection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCollection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


