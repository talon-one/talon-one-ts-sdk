
# UpdateUser


## Properties

Name | Type
------------ | -------------
`name` | string
`state` | string
`isAdmin` | boolean
`policy` | string
`roles` | Array&lt;number&gt;
`applicationNotificationSubscriptions` | object

## Example

```typescript
import type { UpdateUser } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": John Doe,
  "state": deactivated,
  "isAdmin": false,
  "policy": {Role=127},
  "roles": [1, 3],
  "applicationNotificationSubscriptions": null,
} satisfies UpdateUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


