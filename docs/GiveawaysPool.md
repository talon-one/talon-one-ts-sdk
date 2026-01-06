
# GiveawaysPool

Giveaways pools is an entity for managing multiple similar giveaways.

## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`accountId` | number
`name` | string
`description` | string
`subscribedApplicationsIds` | Array&lt;number&gt;
`sandbox` | boolean
`modified` | Date
`createdBy` | number
`modifiedBy` | number

## Example

```typescript
import type { GiveawaysPool } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "accountId": 3886,
  "name": My giveaway pool,
  "description": Generic pool,
  "subscribedApplicationsIds": [2, 4],
  "sandbox": true,
  "modified": null,
  "createdBy": null,
  "modifiedBy": null,
} satisfies GiveawaysPool

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GiveawaysPool
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


