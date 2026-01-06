
# ApplicationCIF


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`name` | string
`description` | string
`activeExpressionId` | number
`modifiedBy` | number
`createdBy` | number
`modified` | Date
`applicationId` | number

## Example

```typescript
import type { ApplicationCIF } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "name": Filter items by product,
  "description": This filter allows filtering by shoes,
  "activeExpressionId": 1,
  "modifiedBy": 334,
  "createdBy": 216,
  "modified": null,
  "applicationId": 322,
} satisfies ApplicationCIF

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApplicationCIF
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


