
# OneTimeCode


## Properties

Name | Type
------------ | -------------
`userId` | number
`accountId` | number
`token` | string
`code` | string

## Example

```typescript
import type { OneTimeCode } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": 109,
  "accountId": 31,
  "token": dy_Fa_lQ4iDAnqldJFvV,
  "code": 552917,
} satisfies OneTimeCode

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OneTimeCode
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


