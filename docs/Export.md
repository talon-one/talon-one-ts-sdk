
# Export


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`accountId` | number
`userId` | number
`entity` | string
`filter` | object

## Example

```typescript
import type { Export } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "accountId": 3886,
  "userId": 388,
  "entity": null,
  "filter": null,
} satisfies Export

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Export
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


