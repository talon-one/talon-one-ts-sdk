
# NewApplicationAPIKey


## Properties

Name | Type
------------ | -------------
`title` | string
`expires` | Date
`platform` | string
`type` | string
`timeOffset` | number
`id` | number
`createdBy` | number
`accountID` | number
`applicationID` | number
`created` | Date
`key` | string

## Example

```typescript
import type { NewApplicationAPIKey } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": My generated key,
  "expires": 2023-08-24T14:00:00Z,
  "platform": none,
  "type": staging,
  "timeOffset": 100000,
  "id": 34,
  "createdBy": 280,
  "accountID": 13,
  "applicationID": 54,
  "created": 2022-03-02T16:46:17.758585Z,
  "key": f45f90d21dcd9bac965c45e547e9754a3196891d09948e35adbcbedc4e9e4b01,
} satisfies NewApplicationAPIKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewApplicationAPIKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


