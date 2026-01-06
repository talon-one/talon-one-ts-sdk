
# PriceType


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`accountId` | number
`name` | string
`title` | string
`description` | string
`modified` | Date
`subscribedCatalogsIds` | Array&lt;number&gt;
`targetedAudiencesIds` | Array&lt;number&gt;

## Example

```typescript
import type { PriceType } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "accountId": 1,
  "name": member,
  "title": Member Price,
  "description": The price available exclusively to members.,
  "modified": 2021-09-12T10:12:42Z,
  "subscribedCatalogsIds": [1, 2, 3],
  "targetedAudiencesIds": [1, 2, 3],
} satisfies PriceType

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceType
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


