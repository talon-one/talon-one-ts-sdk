
# UpdatePriceType


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`targetedAudiencesIds` | Set&lt;number&gt;

## Example

```typescript
import type { UpdatePriceType } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": Member Price,
  "description": The price available exclusively to members.,
  "targetedAudiencesIds": [1, 2, 3],
} satisfies UpdatePriceType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdatePriceType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


