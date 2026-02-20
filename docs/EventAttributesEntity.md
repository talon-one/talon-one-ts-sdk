
# EventAttributesEntity


## Properties

Name | Type
------------ | -------------
`type` | string
`attributes` | object

## Example

```typescript
import type { EventAttributesEntity } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": pageViewed,
  "attributes": {myAttribute=myValue},
} satisfies EventAttributesEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EventAttributesEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


