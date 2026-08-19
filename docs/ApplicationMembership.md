
# ApplicationMembership


## Properties

Name | Type
------------ | -------------
`applicationId` | number
`applicationName` | string

## Example

```typescript
import type { ApplicationMembership } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "applicationId": 1,
  "applicationName": My Application,
} satisfies ApplicationMembership

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApplicationMembership
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


