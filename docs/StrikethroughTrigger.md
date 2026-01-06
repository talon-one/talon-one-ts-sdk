
# StrikethroughTrigger

Information about the event that triggered the strikethrough labeling.

## Properties

Name | Type
------------ | -------------
`id` | number
`type` | string
`triggeredAt` | Date
`totalAffectedItems` | number
`payload` | object

## Example

```typescript
import type { StrikethroughTrigger } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "type": CATALOG_SYNC,
  "triggeredAt": 2020-06-10T09:05:27.993483Z,
  "totalAffectedItems": 1500,
  "payload": {catalogId=2, catalogVersion=100},
} satisfies StrikethroughTrigger

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrikethroughTrigger
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


