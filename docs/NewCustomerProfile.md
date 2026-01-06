
# NewCustomerProfile


## Properties

Name | Type
------------ | -------------
`attributes` | object

## Example

```typescript
import type { NewCustomerProfile } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "attributes": {Language=english, ShippingCountry=DE},
} satisfies NewCustomerProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewCustomerProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


