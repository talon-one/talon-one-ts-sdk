
# ProfileAudiencesChanges


## Properties

Name | Type
------------ | -------------
`adds` | Array&lt;number&gt;
`deletes` | Array&lt;number&gt;

## Example

```typescript
import type { ProfileAudiencesChanges } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "adds": [2, 4],
  "deletes": [7],
} satisfies ProfileAudiencesChanges

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProfileAudiencesChanges
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


