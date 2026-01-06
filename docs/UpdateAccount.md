
# UpdateAccount


## Properties

Name | Type
------------ | -------------
`attributes` | object
`companyName` | string
`billingEmail` | string
`state` | string
`planExpires` | Date

## Example

```typescript
import type { UpdateAccount } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "attributes": null,
  "companyName": null,
  "billingEmail": null,
  "state": null,
  "planExpires": null,
} satisfies UpdateAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


