
# MultipleAudiencesItem


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`name` | string
`integrationId` | string
`status` | string

## Example

```typescript
import type { MultipleAudiencesItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "name": Travel audience,
  "integrationId": 382370BKDB946,
  "status": new,
} satisfies MultipleAudiencesItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MultipleAudiencesItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


