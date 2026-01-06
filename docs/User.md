
# User


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`modified` | Date
`email` | string
`accountId` | number
`name` | string
`state` | string
`inviteToken` | string
`isAdmin` | boolean
`policy` | object
`roles` | Array&lt;number&gt;
`authMethod` | string
`applicationNotificationSubscriptions` | object
`lastSignedIn` | Date
`lastAccessed` | Date
`latestFeedTimestamp` | Date
`additionalAttributes` | object

## Example

```typescript
import type { User } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "modified": 2021-09-12T10:12:42Z,
  "email": john.doe@example.com,
  "accountId": 3886,
  "name": John Doe,
  "state": invited,
  "inviteToken": Gy9b8w1irmQtEPo5RmbMmSPheL5h4,
  "isAdmin": false,
  "policy": {Role=127, Applications=null},
  "roles": [71],
  "authMethod": basic_auth,
  "applicationNotificationSubscriptions": {},
  "lastSignedIn": 2021-09-12T10:12:42Z,
  "lastAccessed": 2021-09-12T10:14:42Z,
  "latestFeedTimestamp": 2020-06-01T00:00:00Z,
  "additionalAttributes": {},
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


