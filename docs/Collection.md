
# Collection


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`accountId` | number
`modified` | Date
`description` | string
`subscribedApplicationsIds` | Array&lt;number&gt;
`name` | string
`modifiedBy` | number
`createdBy` | number
`applicationId` | number
`campaignId` | number
`payload` | Array&lt;string&gt;

## Example

```typescript
import type { Collection } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "accountId": 3886,
  "modified": 2021-09-12T10:12:42Z,
  "description": My collection of SKUs,
  "subscribedApplicationsIds": [1, 2, 3],
  "name": My collection,
  "modifiedBy": 48,
  "createdBy": 134,
  "applicationId": 1,
  "campaignId": 7,
  "payload": [KTL-WH-ET-1, KTL-BL-ET-1],
} satisfies Collection

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Collection
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


