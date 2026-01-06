
# Catalog


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`accountId` | number
`modified` | Date
`name` | string
`description` | string
`subscribedApplicationsIds` | Array&lt;number&gt;
`version` | number
`createdBy` | number

## Example

```typescript
import type { Catalog } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "accountId": 3886,
  "modified": 2021-09-12T10:12:42Z,
  "name": seafood,
  "description": seafood catalog,
  "subscribedApplicationsIds": [1, 2, 3],
  "version": 6,
  "createdBy": 6,
} satisfies Catalog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Catalog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


