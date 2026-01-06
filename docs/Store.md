
# Store


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`name` | string
`description` | string
`attributes` | object
`integrationId` | string
`applicationId` | number
`updated` | Date
`linkedCampaignIds` | Array&lt;number&gt;

## Example

```typescript
import type { Store } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-02-07T08:15:22Z,
  "name": South US store,
  "description": This is the description of the store in south US.,
  "attributes": {country=USA, code=1234},
  "integrationId": STORE-001,
  "applicationId": 322,
  "updated": 2021-09-23T10:12:42Z,
  "linkedCampaignIds": [4, 6, 8],
} satisfies Store

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Store
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


