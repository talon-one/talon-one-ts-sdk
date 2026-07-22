
# Change


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`userId` | number
`applicationId` | number
`entity` | string
`old` | object
`_new` | object
`managementKeyId` | number

## Example

```typescript
import type { Change } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "userId": 388,
  "applicationId": 359,
  "entity": /v1/applications/359/campaigns/6727,
  "old": {},
  "_new": {applicationId"=359, attributes"={}, campaignGroups"=[], created"=2022-07-08T13:04:02.972762328Z, description"=, features"=[referrals, loyalty], id=6727},
  "managementKeyId": 3,
} satisfies Change

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Change
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


