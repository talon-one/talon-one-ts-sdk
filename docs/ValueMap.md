
# ValueMap


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`createdBy` | number
`campaignId` | number

## Example

```typescript
import type { ValueMap } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2021-07-20T22:00:00Z,
  "createdBy": 216,
  "campaignId": 244,
} satisfies ValueMap

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValueMap
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


